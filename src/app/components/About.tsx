import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Zap, Code, LineChart } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Target, text: "Meta Ads / Conversion API / Segmentación avanzada" },
    { icon: Brain, text: "Neuro-marketing en embudos" },
    { icon: Code, text: "Integraciones IA (n8n, ChatGPT, BigQuery, Datahash)" },
    { icon: Zap, text: "Copywriting psicológico + diseño visual" },
    { icon: LineChart, text: "Funnel hacking y optimización CPA/CPL" },
  ];

  const stats = [
    { value: "3+", label: "Años en ecosistema digital" },
    { value: "$40K+", label: "USD/mes gestionados" },
    { value: "+300%", label: "ROI promedio" },
    { value: "↓40%", label: "CPA" },
    { value: "+7000", label: "Conversiones auditadas" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Story */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Sobre <span className="text-primary">mí</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/0" />
            </div>

            <div className="space-y-6 text-lg">
              <p className="text-foreground leading-relaxed">
                Soy{" "}
                <span className="font-semibold text-primary">Ángel Vaca</span>,
                estratega y trafficker digital internacional.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Combino{" "}
                <span className="text-foreground font-medium">
                  neuro-marketing
                </span>
                ,
                <span className="text-foreground font-medium">
                  {" "}
                  inteligencia artificial
                </span>{" "}
                y<span className="text-foreground font-medium">
                  {" "}
                  datos
                </span>{" "}
                para diseñar estrategias que escalan marcas con precisión
                quirúrgica.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Desde Colombia, he trabajado con empresas de Centroamérica,
                Europa y LATAM, optimizando campañas de miles de dólares y
                generando crecimiento real, medibles, y muy rentables para cada
                empresa de diferentes nichos.
              </p>

              <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-4xl" aria-hidden="true">
                    🕰
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">Historia</h3>
                    <p className="text-muted-foreground italic">
                      "No hay campañas exitosas sin entender a las personas."
                    </p>
                    <p className="text-muted-foreground">
                      Empecé en el marketing digital impulsado por esta idea.
                      Desde mis primeros proyectos locales hasta liderar
                      estrategias internacionales, he visto cómo la disciplina,
                      la fe y la ciencia detrás del comportamiento humano pueden
                      transformar marcas y vidas.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Hoy, mi{" "}
                      <span className="text-primary font-medium">
                        propósito
                      </span>{" "}
                      es claro: construir estrategias que no solo vendan, sino
                      que inspiren Y Conecten con las personas.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-4">
              <blockquote className="text-2xl font-semibold text-primary italic border-l-4 border-primary pl-6">
                "Transformo datos en decisiones, y decisiones en resultados."
              </blockquote>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div
            className="space-y-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Skills */}
            <Card className="p-8 bg-card border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⚙</div>
                  <h3 className="text-2xl font-bold">Skills</h3>
                </div>

                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group hover:translate-x-2 transition-transform"
                    >
                      <skill.icon className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Experience Stats */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden="true">
                    🚀
                  </div>
                  <h3 className="text-2xl font-bold">Experiencia</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Con más de 3 años en el ecosistema digital, gestiono campañas
                  que superan los $40,000 USD mensuales para marcas en sectores
                  como iGaming, belleza, educación y eCommerce.
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  He dirigido proyectos para empresas internacionales en
                  Centroamérica, Europa y LATAM, liderando equipos creativos y
                  técnicos para lograr escala sostenible y crecimiento medible.
                </p>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">
                    📈 Resultados promedio:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center space-y-1 p-3 sm:p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-primary/10 hover:border-primary/30"
                      >
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6 animate-fade-in">
          <p className="text-xl text-muted-foreground">
            ✨ ¿Quieres llevar tu estrategia digital al siguiente nivel?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a
              href="#contacto"
              aria-label="Agendar consultoría estratégica con Ángel Vaca"
            >
              Agendar consultoría
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
