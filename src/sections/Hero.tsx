import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { highlights, profile, servicePillars } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-28">
      <div className="container grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Badge className="mb-6 border-red-500/20 bg-rose-700/[0.07] text-red-100">
            Disponible para oportunidades TI
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-red-100 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#proyectos">
                Ver proyectos
                <ArrowDown size={17} />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contacto">
                Contacto
                <Mail size={17} />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <Linkedin size={17} />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
                <Github size={17} />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={profile.cv} download>
                Descargar CV
                <Download size={17} />
              </a>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur"
              >
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg animate-float"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-red-600/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 shadow-redglow backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-auto text-xs text-muted-foreground">security-profile.tsx</span>
            </div>
            <div className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-lg border border-red-500/20 bg-red-500/[0.08]">
                  <ShieldCheck className="text-red-400" size={30} />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-white">TI moderno</p>
                  <p className="text-sm text-muted-foreground">Soporte + Web + Datos + Seguridad</p>
                </div>
              </div>
              <div className="space-y-3">
                {servicePillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.065]"
                    >
                      <Icon className="mt-1 text-red-400" size={20} />
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
