import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <AnimatedSection id="certificaciones">
      <div className="container">
        <SectionHeading
          eyebrow="Estudios"
          title="Formacion y certificaciones"
          description="Seccion lista para sumar credenciales, cursos y especializaciones futuras sin modificar la estructura visual."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="transition duration-300 hover:-translate-y-1 hover:border-red-500/35">
                <CardContent className="p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-red-500/20 bg-red-500/[0.07]">
                    <Icon className="text-red-100" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
