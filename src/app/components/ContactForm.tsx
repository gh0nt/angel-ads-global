"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { toast } from "sonner";
import { useLeadSubmission } from "@/hooks/use-lead-submission";

const ContactForm = () => {
  const { submitLead, isLoading, error, success } = useLeadSubmission();

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    sector: "",
    pautaEnMetaAds: "",
    tiempoPautando: "",
    inversionMensual: "",
    presupuestoMeta: "",
    objetivoPrincipal: "",
    correo: "",
    whatsapp: "",
    pais: "",
    ciudad: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos requeridos
    if (!formData.nombre || !formData.correo || !formData.empresa) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    try {
      await submitLead({
        nombre: formData.nombre,
        empresa: formData.empresa,
        sector: formData.sector,
        correo: formData.correo,
        whatsapp: formData.whatsapp,
        pais: formData.pais,
        ciudad: formData.ciudad,
      });

      toast.success(
        "¡Solicitud enviada exitosamente! Te contactaremos pronto.",
        {
          duration: 5000,
        }
      );

      // Resetear formulario después del éxito
      setFormData({
        nombre: "",
        empresa: "",
        sector: "",
        pautaEnMetaAds: "",
        tiempoPautando: "",
        inversionMensual: "",
        presupuestoMeta: "",
        objetivoPrincipal: "",
        correo: "",
        whatsapp: "",
        pais: "",
        ciudad: "",
      });
    } catch (err) {
      toast.error(
        error || "Error al enviar la solicitud. Por favor intenta nuevamente.",
        { duration: 5000 }
      );
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background contrast - light section on dark site */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Agenda tu{" "}
              <span className="text-primary">diagnóstico estratégico</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/0 mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Si tu empresa ya invierte o quiere invertir en Meta Ads, completa
              el siguiente formulario. Analizaré tu caso para ofrecerte la mejor
              estrategia para escalar resultados.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-[0_0_40px_hsl(var(--glow-primary)/0.1)] animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">⓵ Nombre completo / Empresa *</Label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    required
                    className="bg-background/50"
                    aria-label="Nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa">
                    ¿Con qué marca o empresa trabajas? *
                  </Label>
                  <Input
                    id="empresa"
                    placeholder="Nombre de tu empresa o marca"
                    value={formData.empresa}
                    onChange={(e) => handleChange("empresa", e.target.value)}
                    required
                    className="bg-background/50"
                    aria-label="Nombre de la empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sector">⓶ Sector o industria *</Label>
                <Input
                  id="sector"
                  placeholder="Ej.: apuestas deportivas, restaurantes, retail, educación, fitness, etc."
                  value={formData.sector}
                  onChange={(e) => handleChange("sector", e.target.value)}
                  required
                  className="bg-background/50"
                  aria-label="Sector o industria de tu negocio"
                />
              </div>

              {/* Meta Ads Experience */}
              <div className="space-y-4 p-6 rounded-lg bg-background/30 border border-border/50">
                <Label className="text-base font-semibold">
                  ⓷ ¿Tu empresa ya pauta en Meta Ads? *
                </Label>
                <RadioGroup
                  value={formData.pautaEnMetaAds}
                  onValueChange={(value) =>
                    handleChange("pautaEnMetaAds", value)
                  }
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="si" />
                    <Label htmlFor="si" className="cursor-pointer">
                      Sí
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pasado" id="pasado" />
                    <Label htmlFor="pasado" className="cursor-pointer">
                      Pautamos en el pasado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nunca" id="nunca" />
                    <Label htmlFor="nunca" className="cursor-pointer">
                      Nunca
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.pautaEnMetaAds === "si" && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="tiempoPautando">
                    ⓸ Si ya pautas, ¿desde hace cuánto? *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleChange("tiempoPautando", value)
                    }
                  >
                    <SelectTrigger
                      className="bg-background/50"
                      aria-label="Tiempo pautando en Meta Ads"
                    >
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-3">&lt;3 meses</SelectItem>
                      <SelectItem value="3-6">3–6 meses</SelectItem>
                      <SelectItem value="mas-6">&gt;6 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Budget Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="inversionMensual">
                    ⓹ Inversión mensual promedio *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleChange("inversionMensual", value)
                    }
                  >
                    <SelectTrigger
                      className="bg-background/50"
                      aria-label="Inversión mensual promedio"
                    >
                      <SelectValue placeholder="Selecciona rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-500">
                        Menos de $500 USD
                      </SelectItem>
                      <SelectItem value="500-2000">$500–$2,000 USD</SelectItem>
                      <SelectItem value="2000-10000">
                        Más de $2,000 USD
                      </SelectItem>
                      <SelectItem value="mas-10000">
                        Más de $10,000 USD
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="presupuestoMeta">
                    ⓺ Presupuesto meta para escalar *
                  </Label>
                  <Input
                    id="presupuestoMeta"
                    placeholder='Ej.: "Quiero duplicar resultados invirtiendo 30% más"'
                    value={formData.presupuestoMeta}
                    onChange={(e) =>
                      handleChange("presupuestoMeta", e.target.value)
                    }
                    required
                    className="bg-background/50"
                    aria-label="Presupuesto meta para escalar"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objetivoPrincipal">
                  ⓻ Objetivo principal *
                </Label>
                <Select
                  onValueChange={(value) =>
                    handleChange("objetivoPrincipal", value)
                  }
                >
                  <SelectTrigger
                    className="bg-background/50"
                    aria-label="Objetivo principal"
                  >
                    <SelectValue placeholder="Selecciona tu objetivo principal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="optimizar">
                      Optimizar campañas
                    </SelectItem>
                    <SelectItem value="escalar">Escalar resultados</SelectItem>
                    <SelectItem value="diagnostico">
                      Diagnóstico completo
                    </SelectItem>
                    <SelectItem value="desde-cero">
                      Implementar desde cero
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="correo">
                    ⓼ Contacto — Correo electrónico *
                  </Label>
                  <Input
                    id="correo"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.correo}
                    onChange={(e) => handleChange("correo", e.target.value)}
                    required
                    className="bg-background/50"
                    aria-label="Correo electrónico"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    required
                    className="bg-background/50"
                    aria-label="Número de WhatsApp"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pais">⓽ País / Ciudad *</Label>
                  <Input
                    id="pais"
                    placeholder="País"
                    value={formData.pais}
                    onChange={(e) => handleChange("pais", e.target.value)}
                    required
                    className="bg-background/50"
                    aria-label="País"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ciudad">&nbsp;</Label>
                  <Input
                    id="ciudad"
                    placeholder="Ciudad"
                    value={formData.ciudad}
                    onChange={(e) => handleChange("ciudad", e.target.value)}
                    required
                    className="bg-background/50"
                    aria-label="Ciudad"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  ⚠️ {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm">
                  ✅ ¡Formulario enviado exitosamente! Te contactaremos pronto.
                </div>
              )}

              {/* Final Message */}
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Analizo cada aplicación de forma personalizada. Si tu empresa
                  cumple con los criterios de inversión y proyección, te
                  contactaré para una reunión vía Meet, gratuita.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  (Cupos limitados por semana.)
                </p>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isLoading}
                  aria-label="Solicitar diagnóstico estratégico ahora"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    "🚀 Solicitar diagnóstico ahora"
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
