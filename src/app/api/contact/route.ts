import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

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

// Helper function to create Resend client
function createResendClient() {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error(
      "Resend API key is missing. Please check your environment variables."
    );
  }

  return new Resend(resendApiKey);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, empresa, sector, correo, whatsapp, pais, ciudad } = body;

    // Validar campos requeridos
    if (!nombre || !correo) {
      return NextResponse.json(
        { error: "Nombre y correo son campos requeridos" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: "Formato de correo inválido" },
        { status: 400 }
      );
    }

    // 1️⃣ Guardar en Supabase
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          nombre,
          empresa: empresa || null,
          sector: sector || null,
          correo,
          whatsapp: whatsapp || null,
          pais: pais || null,
          ciudad: ciudad || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Error de Supabase:", error);
      throw new Error("Error al guardar en la base de datos");
    }

    // 2️⃣ Enviar correo con Resend
    try {
      const resend = createResendClient();

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: [process.env.NOTIFICATION_EMAIL || "angel@angelads.com"],
        subject: `🚀 Nuevo Lead: ${nombre}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <div style="background: linear-gradient(135deg, #010118 0%, #1a1a3a 100%); padding: 30px 20px; text-align: center;">
              <h1 style="color: #d7fa00; margin: 0; font-size: 28px; font-weight: bold;">
                ⚡ Nuevo Lead Generado
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">
                Angel Ads Global - Sistema de Notificaciones
              </p>
            </div>
            
            <div style="padding: 30px 20px; background-color: #f8f9fa;">
              <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 22px;">
                📋 Información del Lead
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <tr style="background-color: #f1f3f4;">
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">👤 Nombre:</td>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; color: #555;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">🏢 Empresa:</td>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; color: #555;">${
                    empresa || "No especificado"
                  }</td>
                </tr>
                <tr style="background-color: #f1f3f4;">
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">🎯 Sector:</td>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; color: #555;">${
                    sector || "No especificado"
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">📧 Correo:</td>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; color: #555;">
                    <a href="mailto:${correo}" style="color: #d7fa00; text-decoration: none;">${correo}</a>
                  </td>
                </tr>
                <tr style="background-color: #f1f3f4;">
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">📱 WhatsApp:</td>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; color: #555;">${
                    whatsapp || "No especificado"
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">🌍 Ubicación:</td>
                  <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; color: #555;">${
                    pais || "No especificado"
                  }, ${ciudad || "No especificado"}</td>
                </tr>
                <tr style="background-color: #f1f3f4;">
                  <td style="padding: 15px; font-weight: bold; color: #333;">📅 Fecha:</td>
                  <td style="padding: 15px; color: #555;">${new Date().toLocaleString(
                    "es-CO",
                    {
                      timeZone: "America/Bogota",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: linear-gradient(135deg, #010118 0%, #1a1a3a 100%); padding: 25px 20px; text-align: center;">
              <p style="color: #d7fa00; margin: 0; font-size: 18px; font-weight: bold;">
                🎯 Responde rápido para maximizar la conversión
              </p>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">
                Este lead fue generado desde angelads.com
              </p>
            </div>
          </div>
        `,
        text: `
🚀 NUEVO LEAD GENERADO - Angel Ads Global

👤 Nombre: ${nombre}
🏢 Empresa: ${empresa || "No especificado"}
🎯 Sector: ${sector || "No especificado"}
📧 Correo: ${correo}
📱 WhatsApp: ${whatsapp || "No especificado"}
🌍 Ubicación: ${pais || "No especificado"}, ${ciudad || "No especificado"}
📅 Fecha: ${new Date().toLocaleString("es-CO", {
          timeZone: "America/Bogota",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}

🎯 Responde rápido para maximizar la conversión!

--
Este lead fue generado desde angelads.com
        `,
      });

      console.log("✅ Email enviado exitosamente con Resend");
    } catch (emailError) {
      console.error("⚠️ Error enviando email con Resend:", emailError);
      // No fallar la API si el email falla, pero log el error
    }

    return NextResponse.json({
      success: true,
      message: "Lead registrado exitosamente",
      data: data?.[0],
    });
  } catch (err) {
    console.error("❌ Error procesando lead:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Error interno del servidor",
      },
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

    if (error) {
      console.error("Error obteniendo leads:", error);
      throw error;
    }

    return NextResponse.json({
      success: true,
      leads: data,
      count: data?.length || 0,
    });
  } catch (err) {
    console.error("❌ Error obteniendo leads:", err);
    return NextResponse.json(
      { error: "Error obteniendo leads" },
      { status: 500 }
    );
  }
}
