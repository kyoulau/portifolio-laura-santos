import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Code,
  Database,
  Cloud,
  GitBranch,
  MonitorDot,
  Server,
  LayoutDashboard,
  Terminal,
  Package,
  Cpu,
  Settings,
  Globe,
  FileType,
  Smartphone,
  Rocket,
  Monitor,
  Coffee,
  Braces,
  FileText,
  ArrowRight,
} from "lucide-react";
import { FaSpotify, FaMedium, FaInstagram } from "react-icons/fa";

import blythe from "../../assets/blythe.png";
import normal from "../../assets/normal.jpeg";
import imagemLaura from "../../assets/imagemLaura.jpeg";
import PonderaLegal from "../../assets/PonderaLegal.png";
import GCP from "../../assets/GCP.png";
import Java from "../../assets/Java.png";

import Card from "../../components/card";
import Footer from "../../components/footer";
import PhotoFrame from "../../components/PhotoFrame";
import Reveal from "../../components/Reveal";
import SectionTitle from "../../components/SectionTitle";

type SkillCategory = {
  key: string;
  label: string;
  skills: { name: string; icon: ReactNode }[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: "languages",
    label: "languages",
    skills: [
      { name: "JavaScript", icon: <Code size={16} /> },
      { name: "TypeScript", icon: <FileType size={16} /> },
      { name: "Python", icon: <Cpu size={16} /> },
      { name: "Java", icon: <Coffee size={16} /> },
      { name: "PHP", icon: <Braces size={16} /> },
    ],
  },
  {
    key: "frontend",
    label: "frontend",
    skills: [
      { name: "React", icon: <MonitorDot size={16} /> },
      { name: "HTML", icon: <Globe size={16} /> },
      { name: "CSS", icon: <LayoutDashboard size={16} /> },
      { name: "Tailwind CSS", icon: <Package size={16} /> },
    ],
  },
  {
    key: "backend",
    label: "backend_&_apis",
    skills: [
      { name: "Node.js", icon: <Server size={16} /> },
      { name: "Nest.js", icon: <Package size={16} /> },
    ],
  },
  {
    key: "data",
    label: "data_&_infra",
    skills: [
      { name: "MongoDB", icon: <Database size={16} /> },
      { name: "PostgreSQL", icon: <Database size={16} /> },
      { name: "MySQL", icon: <Database size={16} /> },
      { name: "Docker", icon: <Cloud size={16} /> },
    ],
  },
  {
    key: "tooling",
    label: "tooling_&_platforms",
    skills: [
      { name: "Git", icon: <GitBranch size={16} /> },
      { name: "GitHub", icon: <Github size={16} /> },
      { name: "CI/CD", icon: <Settings size={16} /> },
      { name: "Vercel", icon: <Rocket size={16} /> },
      { name: "Linux", icon: <Terminal size={16} /> },
      { name: "Windows", icon: <Monitor size={16} /> },
      { name: "Android", icon: <Smartphone size={16} /> },
    ],
  },
];

const PROJECTS = [
  {
    title: "RESTful API hosted with GCP",
    description:
      "An API developed with FastAPI to manage students, courses, and enrollments at an educational institution, with Swagger documentation.",
    imageUrl: GCP,
    projectUrl: "https://github.com/kyoulau/api-python-docker",
  },
  {
    title: "Constitutional Digital Gamification — Pondera Legal",
    description:
      "An innovative project that transforms the study of Constitutional Law into an engaging game experience! 'Choque Jurídico' is an interactive tool for exploring the challenges and conflicts of fundamental rights in the digital age.",
    imageUrl: PonderaLegal,
    projectUrl: "https://github.com/maricastroo/ponderalegal",
  },
  {
    title: "Workshop about version control with Git & GitHub",
    description:
      "A workshop that covers version control and Git, with a focus on branching and merging, and GitHub as a platform for collaboration and code management.",
    imageUrl: imagemLaura,
    projectUrl:
      "https://www.linkedin.com/posts/laura-santos-costa_ol%C3%A1-rede-querida-aqui-estou-eu-mais-uma-activity-7317631019073851392-SVCB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADib-YEBr93dI0g2sWZvzBxpo2xcb-skepc",
  },
  {
    title: "Data Structures with Java",
    description:
      "In this Medium post, I dive into the knowledge from my Information Systems degree, showing how to write more efficient Java code by implementing data structures like stacks and queues.",
    imageUrl: Java,
    projectUrl:
      "https://medium.com/@laucosan05/estrutura-de-dados-com-pilhas-e-filas-em-java-6cbe30b68b78",
  },
];

const SOCIALS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/laura-santos-costa/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kyoulau", label: "GitHub" },
  { icon: FaMedium, href: "https://medium.com/@laucosan05", label: "Medium" },
  { icon: FaSpotify, href: "https://open.spotify.com/user/laucurtemusica-br", label: "Spotify" },
  { icon: FaInstagram, href: "https://www.instagram.com/kyoulau/", label: "Instagram" },
];

function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-bone">
      {/* fundo: malha de monitor + brilho vermelho, igual à página About */}
      <div
        aria-hidden="true"
        className="texture-grid pointer-events-none fixed inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blood/12 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-[-15%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blood/8 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 md:px-10">
        {/* ——————————————————————————————
            HERO
           —————————————————————————————— */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div
              className="animate-drift"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <PhotoFrame
                src={isHovering ? normal : blythe}
                alt="Retrato de Laura Santos"
                label={isHovering ? "real.jpg" : "avatar.exe"}
                caption={isHovering ? "there she is" : "hover to load real.jpg"}
                imgClassName="aspect-[4/5]"
              />
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal delay={120}>
              <p className="font-retro text-[12px] tracking-[0.3em] text-crt uppercase">
                root@laura:~$ ./launch_portfolio.sh
                <span className="animate-caret ml-1">_</span>
              </p>

              <h1 className="animate-flicker mt-5 font-display text-6xl leading-[0.95] font-light tracking-tight md:text-8xl">
                <span className="text-bone">Laura </span>
                <span className="glow-blood font-blackletter text-blood-bright">
                  Santos
                </span>
              </h1>

              <div className="mt-8 max-w-xl border-l border-blood-bright/50 pl-6">
                <p className="text-xl leading-relaxed text-mist md:text-2xl">
                  Aspiring full-stack and mobile software developer, focused on
                  solution-oriented development using best practices.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["full-stack", "mobile", "problem solver"].map((chip) => (
                  <span
                    key={chip}
                    className="border border-ash px-3 py-1.5 font-retro text-[11px] tracking-[0.16em] text-mist uppercase"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-5">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-mist transition-all duration-300 hover:scale-125 hover:text-blood-bright"
                  >
                    <Icon size={20} />
                  </a>
                ))}
                <a
                  href="https://psychedelic-gazelle-22b.notion.site/Laura-Costa-2426d3b3d2158074ae03cdb0c100f462?pvs=143"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Currículo"
                  className="text-mist transition-all duration-300 hover:scale-125 hover:text-blood-bright"
                >
                  <FileText size={20} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#skills"
                  className="group flex items-center gap-2 border border-blood-bright/60 bg-blood/10 px-6 py-3 font-retro text-[12px] tracking-[0.2em] text-bone uppercase transition-colors duration-300 hover:bg-blood/20"
                >
                  Technical skills
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/sobre"
                  className="group flex items-center gap-2 border border-ash px-6 py-3 font-retro text-[12px] tracking-[0.2em] text-mist uppercase transition-colors duration-300 hover:border-blood-bright/70 hover:text-bone"
                >
                  About me
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——————————————————————————————
            PROFESSIONAL SKILLS
           —————————————————————————————— */}
        <section id="skills" className="mt-40 scroll-mt-28 md:mt-56">
          <SectionTitle index="01" kicker="professional_skills" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SKILL_CATEGORIES.map((category, index) => (
              <Reveal
                key={category.key}
                delay={index * 80}
                className={category.key === "tooling" ? "md:col-span-2" : ""}
              >
                <div className="relative h-full border border-ash bg-crypt/60 texture-noise">
                  <div className="flex items-center gap-2 border-b border-ash/70 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-blood" />
                    <span className="h-2 w-2 rounded-full bg-ash" />
                    <span className="h-2 w-2 rounded-full bg-ash" />
                    <span className="ml-2 font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
                      {category.label}.json
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5 p-5 md:p-6">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 border border-ash/70 px-3 py-1.5 font-retro text-[12px] tracking-[0.06em] text-mist uppercase transition-colors duration-300 hover:border-blood-bright/60 hover:text-bone"
                      >
                        <span className="text-blood-bright">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——————————————————————————————
            PROJECTS
           —————————————————————————————— */}
        <section className="mt-40 md:mt-56">
          <SectionTitle index="02" kicker="selected_work" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <Card
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
