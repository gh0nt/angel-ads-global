import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@Angel_global_Ads",
      url: "https://instagram.com/Angel_global_Ads",
      icon: Instagram,
    },
    {
      name: "TikTok",
      handle: "Angel.global.ads",
      url: "https://tiktok.com/@Angel.global.ads",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "Angel Global ADS",
      url: "https://facebook.com/AngelGlobalADS",
      icon: Facebook,
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Branding */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">
              Angel<span className="text-primary">.Global</span> Ads
            </h3>
            <p className="text-muted-foreground">
              Estratega Digital y Trafficker Internacional
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-primary)/0.2)]"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">
                    {social.name}
                  </div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Ángel Vaca — Angel.Global Ads. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
