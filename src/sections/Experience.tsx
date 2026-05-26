import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <AnimatedSection id="experiencia">
      <div className="container">
        <SectionHeading
          eyebrow="Experiencia"
          title="Soporte tecnico aplicado a operaciones reales"
          description="Experiencia enfocada en continuidad operativa, atencion a usuarios, mantenimiento y apoyo en datos."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-red-500/60 via-red-500/30 to-transparent sm:block" />
          {experience.map((item) => (
            <Card key={item.company} className="relative ml-0 sm:ml-12">
              <span className="absolute -left-[3.2rem] top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-red-500 shadow-glow sm:block" />
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-display text-2xl font-semibold text-white">{item.company}</p>
                    <p className="mt-1 text-red-100">{item.role}</p>
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.items.map((task) => (
                    <div key={task} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-red-400" size={17} />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
