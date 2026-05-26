import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.message.trim().length < 10) {
      setStatus("Completa nombre, correo valido y un mensaje de al menos 10 caracteres.");
      return;
    }

    const subject = encodeURIComponent(`Contacto portafolio - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nCorreo: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Mensaje preparado en tu cliente de correo.");
  };

  return (
    <AnimatedSection id="contacto">
      <div className="container">
        <SectionHeading
          eyebrow="Contacto"
          title="Conversemos sobre oportunidades TI"
          description="Formulario simple, validado y conectado a correo para facilitar postulaciones, entrevistas o colaboraciones."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-semibold text-white">Canales directos</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Disponible para oportunidades en soporte TI, desarrollo web, bases de datos y tecnologia.
              </p>
              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-muted-foreground transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white"
                    >
                      <Icon className="text-cyan-200" size={19} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="grid gap-2 text-sm font-medium text-white">
                  Nombre
                  <input
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-foreground outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white">
                  Correo
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-foreground outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                    placeholder="correo@ejemplo.com"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white">
                  Mensaje
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="min-h-36 resize-y rounded-md border border-white/10 bg-white/[0.05] px-4 py-3 text-foreground outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                    placeholder="Cuéntame sobre la oportunidad o proyecto..."
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit">
                    Enviar mensaje
                    <Send size={16} />
                  </Button>
                  <p
                    className={cn(
                      "text-sm",
                      status.includes("preparado") ? "text-cyan-100" : "text-muted-foreground",
                    )}
                  >
                    {status}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
