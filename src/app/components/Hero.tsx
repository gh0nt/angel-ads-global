import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/hero-background.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Ángel Vaca gestionando campañas de Meta Ads en Ads Manager"
      >
        {/* Overlay más oscuro y con opacidad */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">
                  Meta Ads + IA + Neuro-marketing
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Escalo marcas con tráfico de Meta Ads + IA y neuro-marketing.
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foreground font-body">
                Soy{" "}
                <span className="text-foreground font-semibold">
                  Ángel Vaca
                </span>{" "}
                (Angel.Global Ads) — estratega y trafficker digital. Mis
                campañas funcionan estés donde estés. Consultor para empresas en
                Centroamérica, Europa y LATAM.
              </h2>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-muted-foreground">
                  +$40K/mes gestionados
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span className="text-muted-foreground">CPA a la baja</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <span className="text-muted-foreground">Funnels con IA</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />
                <span className="text-muted-foreground">
                  Crecimiento medible
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a
                  href="#contacto"
                  aria-label="Agendar consultoría con Ángel Vaca"
                >
                  Agendar consultoría
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a
                  href="#portafolio"
                  aria-label="Ver portafolio de casos de éxito"
                >
                  Ver portafolio
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic">
              &ldquo;Disciplina y precisión en cada campaña.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
