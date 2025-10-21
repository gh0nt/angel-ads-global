"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "iGaming (Apuestas deportivas y casino online)",
      location: "Centroamérica (El Salvador y Guatemala)",
      type: "Tráfico digital a gran escala / Meta Ads + IA",
      challenge:
        "Aumentar los primeros depósitos y optimizar el CPA en mercados competitivos.",
      strategy:
        "Implementación de funnels multietapa, remarketing con Conversion API y segmentación avanzada con IA y audiencias dinámicas.",
      stats: [
        { value: 312, prefix: "+", suffix: "%", label: "ROI" },
        { value: 43, prefix: "↓", suffix: "%", label: "CPA promedio" },
      ],
      icon: TrendingUp,
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
    },
    {
      title: "Casinos Presenciales (Villavicencio, Colombia)",
      location: "Hoteles 5 estrellas y centros comerciales",
      type: "Entretenimiento & hospitality",
      challenge:
        "Aumentar tráfico presencial y registros VIP de nuevos jugadores.",
      strategy:
        "Campañas geolocalizadas con Meta Ads, anuncios dinámicos de temporada y automatización de mensajes con WhatsApp API.",
      stats: [
        { value: 60, prefix: "+", suffix: "%", label: "Visitas presenciales" },
        { value: 280, prefix: ">", suffix: "%", label: "ROI mensual" },
      ],
      icon: Target,
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Marcas Urbanas y Gastronómicas",
      location: "Barberías premium / Restaurantes / Tiendas boutique",
      type: "Posicionamiento local y conversión digital",
      challenge:
        "Posicionar marcas locales y convertir su comunidad digital en ventas.",
      strategy:
        "Campañas de atracción local, storytelling visual y anuncios con enfoque emocional (neuro-marketing + escasez + comunidad).",
      stats: [
        { value: 3, suffix: "x", label: "Clientes en 60 días" },
        { value: 100, prefix: "+", suffix: "%", label: "Fidelización" },
      ],
      icon: Users,
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-6">
        <div
          id="portafolio"
          className="text-center space-y-4 mb-16 animate-fade-in"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Portafolio</span> / Casos de Éxito
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/0 mx-auto" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados medibles, estrategias escalables
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
            Cada marca con la que trabajo es un{" "}
            <span className="text-primary font-semibold">
              experimento de precisión
            </span>
            : datos, psicología y creatividad al servicio del crecimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden bg-gradient-to-br ${project.color} border-2 ${project.borderColor} hover:shadow-[0_0_40px_hsl(var(--glow-primary)/0.3)] transition-all duration-500 animate-slide-up`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <project.icon
              className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
          </div>
          <Badge variant="outline" className="border-primary/30 text-primary">
            {project.location}
          </Badge>
        </div>

        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
          {project.title}
        </CardTitle>

        <p className="text-xs text-muted-foreground italic">{project.type}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-muted-foreground font-medium mb-1">
              📊 Desafío:
            </p>
            <p className="text-foreground">{project.challenge}</p>
          </div>
          <div>
            <p className="text-muted-foreground font-medium mb-1">
              ⚙ Estrategia:
            </p>
            <p className="text-foreground">{project.strategy}</p>
          </div>
        </div>

        {/* Animated Stats */}
        <div>
          <p className="text-muted-foreground font-medium mb-3 text-sm">
            🔥 Resultados:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {project.stats.map((stat: any, idx: number) => (
              <StatCounter
                key={idx}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={isVisible}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatCounter = ({
  value,
  prefix = "",
  suffix = "",
  label,
  isVisible,
  delay,
}: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default Projects;
