import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutCards, skills } from "@/data/portfolio";

export function About() {
  return (
    <AnimatedSection id="sobre-mi">
      <div className="container">
        <SectionHeading
          eyebrow="Sobre mi"
          title="Perfil tecnico con criterio, orden y foco en usuario"
          description="Formacion informatica y experiencia practica para resolver incidencias, apoyar operaciones y construir soluciones web claras."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {aboutCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="group transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07]">
                    <Icon className="text-cyan-200" size={22} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
          <p className="mb-5 font-display text-xl font-semibold text-white">Conocimientos destacados</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
