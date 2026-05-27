import { ExternalLink, Github, Languages, LineChart, Rocket } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile, projects, technologies } from "@/data/portfolio";

const githubUser = profile.github.split("/").filter(Boolean).pop() ?? "dmaturanallanos";

type GithubImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function GithubImage({ src, alt, className }: GithubImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid min-h-44 place-items-center rounded-lg border border-white/10 bg-black/30 p-6 text-center">
        <div>
          <Github className="mx-auto mb-3 text-red-400" size={24} />
          <p className="text-sm font-medium text-white">Datos publicos no disponibles</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            La tarjeta dinamica depende de repositorios publicos y del servicio externo de GitHub Stats.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-white/10 bg-black/30 p-3">
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function GithubStats() {
  const publicProjects = projects.filter((project) => project.demo !== "#");
  const featuredStack = technologies.slice(0, 6).map((technology) => technology.name);

  return (
    <AnimatedSection id="github">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Actividad, lenguajes y repositorios"
          description="Evidencia tecnica centralizada con enlaces reales a perfil, repositorios y proyectos publicados."
        />
        <div className="mb-5 grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Github className="mb-4 text-red-400" size={24} />
              <p className="font-display text-2xl font-semibold text-white">@{githubUser}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Perfil conectado al portafolio, contacto profesional y proyectos publicados.
              </p>
              <Button className="mt-5" variant="outline" size="sm" asChild>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  Ver perfil
                  <ExternalLink size={15} />
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Rocket className="mb-4 text-red-400" size={24} />
              <p className="font-display text-2xl font-semibold text-white">
                {publicProjects.length} proyectos online
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Centralix, DashboardML y Ariel Letters enlazados como demos funcionales.
              </p>
              <Button className="mt-5" variant="secondary" size="sm" asChild>
                <a href="#proyectos">Ver proyectos</a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Languages className="mb-4 text-red-400" size={24} />
              <p className="font-display text-2xl font-semibold text-white">Stack principal</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {featuredStack.join(" · ")}
              </p>
              <Button className="mt-5" variant="secondary" size="sm" asChild>
                <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">
                  Repositorios
                  <ExternalLink size={15} />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex items-center gap-3 text-white">
                <LineChart className="text-red-400" size={20} />
                <h3 className="font-display text-lg font-semibold">Estadisticas generales</h3>
              </div>
              <GithubImage
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=fee2e2&text_color=a3a3a3&icon_color=ef4444`}
                alt="Estadisticas de GitHub"
                className="min-h-44 w-full rounded-lg object-contain"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex items-center gap-3 text-white">
                <Languages className="text-red-100" size={20} />
                <h3 className="font-display text-lg font-semibold">Lenguajes mas usados</h3>
              </div>
              <GithubImage
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=fee2e2&text_color=a3a3a3`}
                alt="Lenguajes mas usados en GitHub"
                className="min-h-44 w-full rounded-lg object-contain"
              />
            </CardContent>
          </Card>
        </div>
        <Card className="mt-5">
          <CardContent className="p-5">
            <div className="mb-4 flex items-center gap-3 text-white">
              <Github className="text-red-400" size={20} />
              <h3 className="font-display text-lg font-semibold">Actividad reciente</h3>
            </div>
            <GithubImage
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&theme=high-contrast&hide_border=true&bg_color=00000000&color=a3a3a3&line=ef4444&point=f87171`}
              alt="Grafico de actividad de GitHub"
              className="min-h-48 w-full rounded-lg object-contain"
            />
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
