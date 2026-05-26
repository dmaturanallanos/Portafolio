import { lazy, Suspense } from "react";
import { Background } from "@/components/Background";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";

const About = lazy(() => import("@/sections/About").then((module) => ({ default: module.About })));
const Technologies = lazy(() =>
  import("@/sections/Technologies").then((module) => ({ default: module.Technologies })),
);
const Projects = lazy(() => import("@/sections/Projects").then((module) => ({ default: module.Projects })));
const Experience = lazy(() =>
  import("@/sections/Experience").then((module) => ({ default: module.Experience })),
);
const Certifications = lazy(() =>
  import("@/sections/Certifications").then((module) => ({ default: module.Certifications })),
);
const GithubStats = lazy(() =>
  import("@/sections/GithubStats").then((module) => ({ default: module.GithubStats })),
);
const Contact = lazy(() => import("@/sections/Contact").then((module) => ({ default: module.Contact })));

function App() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="container py-20 text-center text-muted-foreground">Cargando secciones...</div>}>
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <Certifications />
          <GithubStats />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
