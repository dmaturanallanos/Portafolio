import { Github, Languages, LineChart } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/portfolio";

const githubUser = profile.github.split("/").filter(Boolean).pop() ?? "dmaturanallanos";

export function GithubStats() {
  return (
    <AnimatedSection id="github">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Actividad, lenguajes y repositorios"
          description="Integracion visual con tarjetas dinamicas de GitHub para reforzar presencia tecnica y evidencia de trabajo."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex items-center gap-3 text-white">
                <LineChart className="text-red-400" size={20} />
                <h3 className="font-display text-lg font-semibold">Estadisticas generales</h3>
              </div>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=fee2e2&text_color=a3a3a3&icon_color=ef4444`}
                alt="Estadisticas de GitHub"
                className="min-h-44 w-full rounded-lg object-contain"
                loading="lazy"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex items-center gap-3 text-white">
                <Languages className="text-red-100" size={20} />
                <h3 className="font-display text-lg font-semibold">Lenguajes mas usados</h3>
              </div>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=fee2e2&text_color=a3a3a3`}
                alt="Lenguajes mas usados en GitHub"
                className="min-h-44 w-full rounded-lg object-contain"
                loading="lazy"
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
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&theme=high-contrast&hide_border=true&bg_color=00000000&color=a3a3a3&line=ef4444&point=f87171`}
              alt="Grafico de actividad de GitHub"
              className="min-h-48 w-full rounded-lg object-contain"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
