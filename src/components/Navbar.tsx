import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/78 shadow-glow backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <button
          onClick={() => goTo("inicio")}
          className="font-display text-base font-semibold text-white"
          aria-label="Ir al inicio"
        >
          Daniel Maturana
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, id]) => (
            <Button key={id} variant="ghost" size="sm" onClick={() => goTo(id)}>
              {label}
            </Button>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={profile.cv} download>
              Descargar CV
            </a>
          </Button>
        </div>
        <Button
          className="lg:hidden"
          variant="secondary"
          size="icon"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-background/95 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-1">
            {navItems.map(([label, id]) => (
              <Button key={id} variant="ghost" onClick={() => goTo(id)}>
                {label}
              </Button>
            ))}
            <Button variant="outline" asChild>
              <a href={profile.cv} download>
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
