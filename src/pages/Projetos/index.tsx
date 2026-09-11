import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/footer";

type Entry = {
  tag: string;
  title: string;
  url: string;
};

const ARCHIVE: Entry[] = [
  {
    tag: "api",
    title: "DevOps Culture API",
    url: "https://api-python-dev-ops-392622763463.southamerica-east1.run.app/docs",
  },
  {
    tag: "api",
    title: "House Reservation API",
    url: "https://github.com/kyoulau/node-rest",
  },
  {
    tag: "web app",
    title: "Pondera Legal — Law Game",
    url: "https://ponderalegal.vercel.app/",
  },
  {
    tag: "video",
    title: "PetMania",
    url: "https://www.youtube.com/watch?v=sREDC9PIkmU&t=52s",
  },
  {
    tag: "game",
    title: "Coração Urbano — Python Visual Novel",
    url: "https://github.com/kyoulau/Visual-Novel---Lalitha",
  },
  {
    tag: "web app",
    title: "Jogo da Memória — Deftones Edition",
    url: "https://jogo-da-memoria-tau-jet.vercel.app/",
  },
  {
    tag: "web app",
    title: "Livraria Cultura",
    url: "https://github.com/kyoulau/Livraria-Cultura/blob/main/src/app/app.config.server.ts",
  },
  {
    tag: "workshop",
    title: "Version Control with Git & GitHub",
    url: "https://www.linkedin.com/posts/laura-santos-costa_ol%C3%A1-rede-querida-aqui-estou-eu-mais-uma-activity-7317631019073851392-SVCB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADib-YEBr93dI0g2sWZvzBxpo2xcb-skepc",
  },
  {
    tag: "article",
    title: "Data Structures — Stacks & Queues",
    url: "https://medium.com/@laucosan05/estrutura-de-dados-com-pilhas-e-filas-em-java-6cbe30b68b78",
  },
];

function Projetos() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-bone">
      {/* fundo: malha de monitor + brilho vermelho, igual às demais páginas */}
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

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24 md:px-10">
        {/* ——————————————————————————————
            HEADER
           —————————————————————————————— */}
        <Reveal>
          <p className="font-retro text-[12px] tracking-[0.3em] text-crt uppercase">
            C:\&gt; ls ./projects
            <span className="animate-caret ml-1">_</span>
          </p>

          <h1 className="animate-flicker mt-5 font-display text-5xl leading-[0.95] font-light tracking-tight md:text-7xl">
            <span className="text-bone">Personal </span>
            <span className="glow-blood font-blackletter text-blood-bright">
              Projects
            </span>
            <span className="text-bone"> &amp; publications</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Games, APIs, workshops and articles built along the way — the
            full archive, beyond the highlights on the front page.
          </p>
        </Reveal>

        {/* ——————————————————————————————
            ARCHIVE
           —————————————————————————————— */}
        <section className="mt-20 md:mt-24">
          <SectionTitle index="01" kicker="project_archive" />

          <Reveal>
            <div className="relative border border-ash bg-crypt/60 texture-noise">
              <div className="flex items-center gap-2 border-b border-ash/70 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-blood" />
                <span className="h-2 w-2 rounded-full bg-ash" />
                <span className="h-2 w-2 rounded-full bg-ash" />
                <span className="ml-2 font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
                  projects_archive.log
                </span>
              </div>

              <ul>
                {ARCHIVE.map((entry, index) => (
                  <li key={entry.title} className="border-b border-ash/60 last:border-b-0">
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-blood/5 md:px-7"
                    >
                      <span className="font-retro text-[12px] text-ash">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="shrink-0 border border-ash/70 px-2.5 py-1 font-retro text-[10px] tracking-[0.14em] text-mist uppercase transition-colors duration-300 group-hover:border-blood-bright/60 group-hover:text-bone">
                        {entry.tag}
                      </span>

                      <span className="flex-1 truncate font-display text-lg text-bone transition-colors duration-300 group-hover:text-blood-bright md:text-xl">
                        {entry.title}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blood-bright"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <Link
              to="/"
              className="group flex items-center gap-3 border border-ash px-6 py-3 font-retro text-[12px] tracking-[0.22em] text-mist uppercase transition-colors duration-300 hover:border-blood-bright/70 hover:text-bone"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              back to start
            </Link>
          </div>
        </Reveal>

        <Footer />
      </div>
    </div>
  );
}

export default Projetos;
