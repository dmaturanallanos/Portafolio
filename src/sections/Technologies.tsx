import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { technologies } from "@/data/portfolio";

export function Technologies() {
  return (
    <AnimatedSection id="tecnologias">
      <div className="container">
        <SectionHeading
          eyebrow="Stack tecnico"
          title="Tecnologias para soporte, desarrollo y datos"
          description="Un stack equilibrado para construir interfaces, operar informacion, mantener sistemas y colaborar en equipos TI."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035, duration: 0.45 }}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-violet-300/20 bg-violet-300/[0.07] text-cyan-100">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-white">{tech.name}</p>
                      <span className="text-xs text-muted-foreground">{tech.group}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.03, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
