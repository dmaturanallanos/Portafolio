import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.slice(0, 5).map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-sm text-muted-foreground transition hover:text-white"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <a className="text-muted-foreground transition hover:text-cyan-100" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a className="text-muted-foreground transition hover:text-cyan-100" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a className="text-muted-foreground transition hover:text-cyan-100" href={`mailto:${profile.email}`} aria-label="Correo">
            <Mail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
