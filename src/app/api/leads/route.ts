import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import formData from "form-data";
import Mailgun from "mailgun.js";

// Helper function to create Supabase client
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase configuration is missing. Please check your environment variables."
    );
  }

  return createClient(supabaseUrl, supabaseKey);
}

export async function POST(req: Request) {
  try {
    // Create Supabase client inside the function
    const supabase = createSupabaseClient();

    const body = await req.json();

    // Validar campos requeridos
    const { nombre, empresa, sector, correo, whatsapp, pais, ciudad } = body;

    if (!nombre || !correo) {
      return NextResponse.json(
        { error: "Nombre y correo son campos requeridos" },
        { status: 400 }
      );
    }

    // Insertar en Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          nombre,
          empresa,
          sector,
          correo,
          whatsapp,
          pais,
          ciudad,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Error de Supabase:", error);
      throw error;
    }

    // Enviar correo con Mailgun
    try {
      const mailgunApiKey = process.env.MAILGUN_API_KEY;
      const mailgunDomain = process.env.MAILGUN_DOMAIN;
      const mailgunFrom = process.env.MAILGUN_FROM;

      if (!mailgunApiKey || !mailgunDomain || !mailgunFrom) {
        console.warn(
          "Mailgun configuration is missing. Email notification skipped."
        );
      } else {
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({
          username: "api",
          key: mailgunApiKey,
        });

        await mg.messages.create(mailgunDomain, {
          from: mailgunFrom,
          to: [process.env.NOTIFICATION_EMAIL || "angel@angelads.com"],
          subject: `🚀 Nuevo Lead: ${nombre}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #d7fa00; background: #010118; padding: 20px; text-align: center;">
                ⚡ Nuevo Lead Generado
              </h2>
              <div style="padding: 20px; background: #f9f9f9;">
                <h3>Información del Lead:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Nombre:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${nombre}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Empresa:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                    empresa || "No especificado"
                  }</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Sector:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                    sector || "No especificado"
                  }</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Correo:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${correo}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>WhatsApp:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                    whatsapp || "No especificado"
                  }</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Ubicación:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                    pais || "No especificado"
                  }, ${ciudad || "No especificado"}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Fecha:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString(
                    "es-ES"
                  )}</td></tr>
                </table>
              </div>
              <div style="padding: 20px; background: #010118; color: white; text-align: center;">
                <p>Responde rápido para maximizar la conversión 🎯</p>
              </div>
            </div>
          `,
          text: `
Nuevo Lead Generado:

Nombre: ${nombre}
Empresa: ${empresa || "No especificado"}
Sector: ${sector || "No especificado"}
Correo: ${correo}
WhatsApp: ${whatsapp || "No especificado"}
País/Ciudad: ${pais || "No especificado"}, ${ciudad || "No especificado"}
Fecha: ${new Date().toLocaleString("es-ES")}

Responde rápido para maximizar la conversión!
          `,
        });

        console.log("Email enviado exitosamente");
      }
    } catch (emailError) {
      console.error("Error enviando email:", emailError);
      // No fallar la API si el email falla, pero log el error
    }

    return NextResponse.json({
      success: true,
      message: "Lead registrado exitosamente",
      data: data?.[0],
    });
  } catch (err) {
    console.error("Error procesando lead:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// GET para obtener leads (opcional, para administración)
export async function GET() {
  try {
    // Create Supabase client inside the function
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      leads: data,
    });
  } catch (err) {
    console.error("Error obteniendo leads:", err);
    return NextResponse.json(
      { error: "Error obteniendo leads" },
      { status: 500 }
    );
  }
}
