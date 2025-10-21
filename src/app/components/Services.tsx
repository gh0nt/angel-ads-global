import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Search, Rocket, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      emoji: "🧠",
      title: "Mentorías 1:1 Personalizadas",
      subtitle: "Aprende lo que las agencias no te enseñan.",
      description:
        "Sesiones privadas conmigo, donde revisamos tus campañas, tu embudo y tu estrategia completa. Corrijo errores, te enseño a pensar como estratega y te dejo un plan accionable para escalar.",
      ideal:
        "Ideal para: freelancers, media buyers y emprendedores que quieren resultados reales.",
      cta: "Agendar Mentoría",
    },
    {
      icon: Search,
      emoji: "🧩",
      title: "Diagnóstico y Consultoría Estratégica para Empresas",
      subtitle: "Optimiza tu inversión, no la desperdicies.",
      description:
        "Analizo tus campañas, estructuras, públicos y mensajes para detectar cuellos de botella. Luego, te entrego un informe con ajustes de alto impacto y una hoja de ruta estratégica para mejorar tus resultados.",
      ideal:
        "Ideal para: empresas que ya invierten en publicidad pero no están obteniendo el retorno esperado.",
      cta: "Solicitar Diagnóstico",
    },
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Auditoría & Escalamiento de Campañas de Alto Presupuesto",
      subtitle: "Donde los datos hablan y las decisiones escalan.",
      description:
        "Auditoría avanzada de cuentas publicitarias con enfoque en performance, tracking, IA y neuro-marketing. Identifico patrones de pérdida y diseño sistemas de escalamiento progresivo para presupuestos grandes.",
      ideal:
        "Ideal para: marcas y equipos que buscan escalar de $10K a $100K+ mensuales en inversión rentable.",
      cta: "Solicitar Auditoría / Escalamiento",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          id="servicios"
          className="text-center space-y-4 mb-16 animate-fade-in"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Servicios & <span className="text-primary">Consultorías</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/0 mx-auto" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada estrategia que diseño parte de una sola idea: los resultados no
            se improvisan, se construyen con método y precisión. Estos son los
            servicios con los que puedo ayudarte a optimizar, escalar y
            profesionalizar tus campañas en Meta Ads.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />

              <CardHeader className="relative z-10">
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                  <service.icon
                    className="w-8 h-8 text-primary group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">
                    {service.emoji}
                  </span>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base font-medium text-muted-foreground">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <p className="text-xs text-muted-foreground italic">
                  ✅ {service.ideal}
                </p>

                <Button
                  variant="ghost"
                  className="w-full group/btn justify-between text-primary hover:text-primary-foreground hover:bg-primary"
                  asChild
                >
                  <a href="#contacto" aria-label={service.cta}>
                    👉 {service.cta}
                    <ArrowRight
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 p-6 sm:p-12 rounded-2xl bg-gradient-to-r from-card to-card/50 border border-primary/20 animate-fade-in">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
            No vendo promesas, diseño{" "}
            <span className="text-primary">estrategias</span>.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Hagamos que tu marca crezca y destaque en su mercado.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="group w-full sm:w-auto px-6 sm:px-10 py-4 text-sm sm:text-base font-bold"
            asChild
          >
            <a
              href="#contacto"
              aria-label="Agendar consultoría ahora con Ángel Vaca"
              className="flex items-center justify-center gap-2"
            >
              <span className="text-lg sm:text-xl">🎯</span>
              <span className="whitespace-nowrap">
                Agendar Consultoría Ahora
              </span>
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
