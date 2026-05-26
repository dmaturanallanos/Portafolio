import {
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Headset,
  Linkedin,
  Mail,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";

export const profile = {
  name: "Daniel Maturana",
  title: "Técnico en Informática con mención en Ciberseguridad",
  intro:
    "Profesional TI con foco en soporte técnico, desarrollo web, bases de datos y redes. Combino orientación al cliente, resolución de incidencias y criterio técnico para entregar soluciones claras y confiables.",
  email: "dmaturanallanos@gmail.com",
  phone: "+56984306620",
  linkedin: "https://www.linkedin.com/in/daniel-maturana-llanos-b8891a397",
  github: "https://github.com/dmaturanallanos",
  cv: "/CVDanielMaturana.pdf",
};

export const navItems = [
  ["Inicio", "inicio"],
  ["Sobre mi", "sobre-mi"],
  ["Tecnologias", "tecnologias"],
  ["Proyectos", "proyectos"],
  ["Experiencia", "experiencia"],
  ["Contacto", "contacto"],
] as const;

export const highlights = [
  { label: "Soporte TI", value: "+ remoto y presencial" },
  { label: "Bases de datos", value: "SQL / MySQL / SQL Server" },
  { label: "Web", value: "React / TypeScript / PHP" },
  { label: "Seguridad", value: "fundamentos defensivos" },
];

export const aboutCards = [
  {
    icon: GraduationCap,
    title: "Formacion tecnica",
    text: "Base solida en informatica, redes, soporte tecnico, desarrollo web, bases de datos y fundamentos de ciberseguridad.",
  },
  {
    icon: Headset,
    title: "Experiencia practica",
    text: "Soporte remoto, mantencion de equipos, atencion a usuarios, resolucion de incidencias y apoyo operativo TI.",
  },
  {
    icon: Sparkles,
    title: "Perfil profesional",
    text: "Responsable, proactivo, orientado al cliente y con alta capacidad de aprendizaje para integrarse rapido a equipos tecnologicos.",
  },
  {
    icon: ShieldCheck,
    title: "Objetivo",
    text: "Crecer en areas de soporte TI, desarrollo web, datos y ciberseguridad, aportando orden, criterio y mejora continua.",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "React",
  "MySQL",
  "SQL Server",
  "Bootstrap",
  "Redes",
  "Soporte tecnico",
  "Ciberseguridad basica",
  "Git",
  "GitHub",
];

export const technologies = [
  { name: "HTML", level: 88, icon: FaHtml5, group: "Frontend" },
  { name: "CSS", level: 86, icon: FaCss3Alt, group: "Frontend" },
  { name: "JavaScript", level: 78, icon: FaJs, group: "Frontend" },
  { name: "TypeScript", level: 70, icon: SiTypescript, group: "Frontend" },
  { name: "React", level: 74, icon: FaReact, group: "Frontend" },
  { name: "Tailwind", level: 76, icon: SiTailwindcss, group: "UI" },
  { name: "PHP", level: 68, icon: FaPhp, group: "Backend" },
  { name: "MySQL", level: 76, icon: SiMysql, group: "Datos" },
  { name: "SQL Server", level: 72, icon: Database, group: "Datos" },
  { name: "Bootstrap", level: 78, icon: FaBootstrap, group: "UI" },
  { name: "Git/GitHub", level: 74, icon: FaGitAlt, group: "Herramientas" },
  { name: "Soporte TI", level: 86, icon: Wrench, group: "Operaciones" },
  { name: "Redes", level: 70, icon: Network, group: "Infraestructura" },
  { name: "Ciberseguridad", level: 66, icon: ShieldCheck, group: "Seguridad" },
];

export const projects = [
  {
    title: "Centralix",
    description:
      "Aplicacion web para gestionar comercios, operaciones, informacion administrativa y flujos de trabajo de negocios.",
    image: "/project-centralix.svg",
    tags: ["Gestion comercial", "Web App", "Dashboard", "Operaciones"],
    demo: "https://centralix.infinityfreeapp.com/?i=1",
    repo: "https://github.com/dmaturanallanos?tab=repositories",
  },
  {
    title: "DashboardML",
    description:
      "Dashboard personal para organizar tareas, revisar finanzas, visualizar indicadores y mantener control diario.",
    image: "/project-dashboardml.svg",
    tags: ["Dashboard", "Productividad", "Finanzas", "Tareas"],
    demo: "https://dashboardml.netlify.app/",
    repo: "https://github.com/dmaturanallanos?tab=repositories",
  },
  {
    title: "Ariel Letters",
    description:
      "Web informativa y visual para presentar trabajos de tatuaje, estilo artistico, servicios y contenido de marca personal.",
    image: "/project-arielletters.svg",
    tags: ["Sitio web", "Portafolio", "Marca personal", "Responsive"],
    demo: "https://arielletters.netlify.app/",
    repo: "https://github.com/dmaturanallanos?tab=repositories",
  },
];

export const experience = [
  {
    company: "RedAlmacen",
    role: "Soporte TI y apoyo operativo",
    period: "Experiencia practica",
    items: [
      "Soporte tecnico remoto a usuarios.",
      "Mantencion preventiva y correctiva de equipos.",
      "Resolucion de incidencias y seguimiento de casos.",
      "Gestion y apoyo en bases de datos.",
      "Atencion a usuarios y soporte TI general.",
    ],
  },
];

export const certifications = [
  {
    title: "Tecnico en Informatica con mencion en Ciberseguridad",
    detail: "Formacion tecnica profesional orientada a soporte, redes, datos y seguridad.",
    icon: GraduationCap,
  },
  {
    title: "Ruta de especializacion continua",
    detail: "Seccion preparada para cursos, certificaciones y futuras credenciales TI.",
    icon: ShieldCheck,
  },
  {
    title: "Practica y proyectos aplicados",
    detail: "Aprendizaje basado en implementaciones web, SQL, soporte y resolucion de problemas.",
    icon: Terminal,
  },
];

export const contactLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Correo", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Telefono", href: `tel:${profile.phone}`, icon: Phone },
];

export const servicePillars = [
  { icon: Headset, title: "Soporte tecnico", text: "Diagnostico, usuarios, equipos e incidencias." },
  { icon: Code2, title: "Desarrollo web", text: "Interfaces modernas, mantenibles y responsive." },
  { icon: Database, title: "Bases de datos", text: "Consultas, apoyo operativo y automatizaciones SQL." },
  { icon: Globe2, title: "Redes y seguridad", text: "Fundamentos de conectividad y buenas practicas." },
];
