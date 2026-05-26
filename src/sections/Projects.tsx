import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <AnimatedSection id="proyectos">
      <div className="container">
        <SectionHeading
          eyebrow="Proyectos"
          title="Soluciones orientadas al trabajo TI real"
          description="Cards preparadas para crecer con nuevos proyectos, repositorios y demos publicas."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-white/10 bg-card/70 shadow-redglow backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:rotate-[0.4deg] hover:border-red-500/35"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Ver proyecto
                      <ExternalLink size={15} />
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      GitHub
                      <Github size={15} />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
