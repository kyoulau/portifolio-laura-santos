import { ExternalLink } from "lucide-react";
import Reveal from "../Reveal";
import PhotoFrame from "../PhotoFrame";

import passaporte from "../../images/passaporte.jpg";
import workshopGit from "../../images/laura-workshop-git.jpg";
import poliwoman from "../../images/laura-poliwoman.jpg";
import certificadoJvipc from "../../images/certificado-jvipc-2026.png";
import certificadoIdea from "../../images/certificado-idea-2026.png";

type Photo = {
  src: string;
  alt: string;
  label?: string;
  /** classe de aspect-ratio; padrão é paisagem (aspect-video) */
  aspect?: string;
};

type Entry = {
  /** Etiqueta curta em monoespaçada: o "tipo" do acontecimento */
  tag: string;
  title: string;
  description: string;
  link?: { label: string; url: string };
  photos?: Photo[];
};

type YearBlock = {
  year: number;
  /** Subtítulo do ano, em uma linha */
  caption: string;
  entries: Entry[];
};

/**
 * Para preencher a linha do tempo, basta adicionar objetos em `entries`.
 * Um ano com `entries: []` mostra um slot vazio esperando conteúdo.
 */
const TIMELINE: YearBlock[] = [
  {
    year: 2023,
    caption: "the first boot",
    entries: [
      {
        tag: "university",
        title: "Bachelor in Information Systems",
        description:
          "I started my undergraduate degree in Information Systems at PUCPR with a 100% PROUNI scholarship.",
      },
      {
        tag: "travel",
        title: "First trip abroad — Vienna, Austria",
        description:
          "Spent three months living in Vienna — my first international trip, and the one that made the world feel a lot smaller.",
        photos: [
          {
            src: passaporte,
            alt: "Passaporte brasileiro de Laura Santos pronto para a viagem a Viena",
            label: "boarding.jpg",
            aspect: "aspect-[3/4]",
          },
        ],
      },
      {
        tag: "language",
        title: "Started German at PUCPR — A1.1",
        description:
          "Began studying German at PUCPR, starting from level A1.1.",
      },
    ],
  },
  {
    year: 2024,
    caption: "everything, everywhere, all at once",
    entries: [
      {
        tag: "first job",
        title: "FullStack Intern at Cheers",
        description:
          "My first experience in the field — a FullStack internship on the system's code maintenance team.",
      },
      {
        tag: "teaching",
        title: "Monitor at PUCPR",
        description: "Class monitor for Database classes at PUCPR University.",
      },
      {
        tag: "community",
        title: "Information Systems Academic Center",
        description:
          "Helped found our academic center as vice-secretary, later becoming director of events — bringing tech community events to PUCPR.",
      },
    ],
  },
  {
    year: 2025,
    caption: "going enterprise",
    entries: [
      {
        tag: "leadership",
        title: "Director of Events — PUCPR Academic Center",
        description:
          "Continued leading the events front for the Information Systems Academic Center at PUCPR.",
      },
      {
        tag: "community",
        title: "Partnership with PoliWoman",
        description:
          "Partnered with PoliWoman, a university extension project for women in tech, and spoke on their behalf at a GitHub workshop for incoming students.",
        link: {
          label: "read the PUCPR blog post",
          url: "https://blogs.pucpr.br/sistemas-de-informacao/2025/09/15/alunos-organizam-workshop-de-github-para-ingressantes/",
        },
        photos: [
          {
            src: workshopGit,
            alt: "Laura Santos apresentando o workshop de Git para os ingressantes",
            label: "workshop_01.jpg",
          },
          {
            src: poliwoman,
            alt: "Laura Santos falando ao microfone durante o workshop de GitHub",
            label: "workshop_02.jpg",
          },
        ],
      },
      {
        tag: "internship",
        title: "Software Developer at Volvo Group",
        description:
          "Worked with REST APIs using NestJS and microservices, wrapping up the internship in October 2025.",
      },
    ],
  },
  {
    year: 2026,
    caption: "new job, new world",
    entries: [
      {
        tag: "career",
        title: "Software Engineer at NTT Data",
        description:
          "Started working as a Software Engineer at NTT Data.",
      },
      {
        tag: "research",
        title: "16ª JVIPC — Porto, Portugal",
        description:
          "Presented the paper \"Desenvolvimento de ações para fortalecimento da presença digital do PRAPETEC\" at the 16th International Virtual Conference on Scientific Research.",
        photos: [
          {
            src: certificadoJvipc,
            alt: "Certificado de participação na 16ª Jornada Virtual Internacional em Pesquisa Científica",
            label: "certificate.png",
          },
        ],
      },
      {
        tag: "research",
        title: "Congresso Internacional IDEA 2026",
        description:
          "Presented \"PRAPETEC Digital: construção de presença online e difusão científica do grupo de pesquisa\", co-authored with Raquel Pasternak Glitz Kowalski and Cleber Lopes.",
        photos: [
          {
            src: certificadoIdea,
            alt: "Certificado de apresentação de trabalho no Congresso Internacional IDEA 2026",
            label: "certificate.png",
          },
        ],
      },
      {
        tag: "language",
        title: "Completed German Studies — B1 at PUC Idiomas",
        description:
          "Finished my German studies at PUC Idiomas, reaching level B1 — closing the loop that started back in 2023.",
      },
      {
        tag: "award",
        title: "Talent Portfolio — Dean's List 2026",
        description:
          "Awarded the Portfólio de Talentos – Dean's List 2026, in September 2026.",
      },
    ],
  },
];

function EmptySlot() {
  return (
    <div className="border border-dashed border-ash/70 px-5 py-7">
      <p className="font-retro text-[12px] tracking-[0.2em] text-mist/60 uppercase">
        awaiting_entry
        <span className="animate-caret ml-1 text-blood-bright">█</span>
      </p>
    </div>
  );
}

function Timeline() {
  return (
    <div className="relative">
      {/* espinha vertical */}
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[11px] w-px bg-linear-to-b from-transparent via-ash to-transparent md:left-[15px]"
      />

      <ol className="space-y-16 md:space-y-24">
        {TIMELINE.map((block, blockIndex) => (
          <li key={block.year} className="relative pl-10 md:pl-16">
            {/* marcador do ano na espinha */}
            <span
              aria-hidden="true"
              className="absolute top-2.5 left-0 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"
            >
              <span className="absolute inset-0 rotate-45 border border-blood-bright/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-blood-bright shadow-[0_0_12px_rgba(212,24,61,0.9)]" />
            </span>

            <Reveal>
              <header className="mb-7 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <h3 className="glow-blood font-display text-5xl leading-none font-light tracking-tight text-bone md:text-7xl">
                  {block.year}
                </h3>
                <p className="font-retro text-[12px] tracking-[0.24em] text-crt uppercase">
                  // {block.caption}
                </p>
              </header>
            </Reveal>

            <div className="space-y-5">
              {block.entries.length === 0 ? (
                <Reveal delay={80}>
                  <EmptySlot />
                </Reveal>
              ) : (
                block.entries.map((entry, index) => (
                  <Reveal key={entry.title} delay={index * 90}>
                    <article className="group relative border border-ash bg-crypt/60 px-5 py-6 transition-colors duration-500 hover:border-blood-bright/60 md:px-7">
                      <span
                        aria-hidden="true"
                        className="absolute top-0 bottom-0 left-0 w-px bg-blood-bright/0 transition-colors duration-500 group-hover:bg-blood-bright/70"
                      />

                      <p className="font-retro text-[11px] tracking-[0.22em] text-mist uppercase">
                        [ {entry.tag} ]
                      </p>

                      <h4 className="mt-2 font-display text-2xl leading-snug font-medium text-bone md:text-3xl">
                        {entry.title}
                      </h4>

                      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-mist md:text-lg">
                        {entry.description}
                      </p>

                      {entry.link && (
                        <a
                          href={entry.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 font-retro text-[12px] tracking-[0.16em] text-crt uppercase underline decoration-crt/40 underline-offset-4 transition-colors duration-300 hover:text-blood-bright hover:decoration-blood-bright/60"
                        >
                          {entry.link.label}
                          <ExternalLink size={12} />
                        </a>
                      )}

                      {entry.photos && entry.photos.length > 0 && (
                        <div
                          className={`mt-6 grid gap-4 ${
                            entry.photos.length > 1
                              ? "sm:grid-cols-2"
                              : "max-w-xs"
                          }`}
                        >
                          {entry.photos.map((photo) => (
                            <PhotoFrame
                              key={photo.src}
                              src={photo.src}
                              alt={photo.alt}
                              label={photo.label}
                              imgClassName={photo.aspect ?? "aspect-video"}
                            />
                          ))}
                        </div>
                      )}
                    </article>
                  </Reveal>
                ))
              )}
            </div>

            {/* ornamento entre os anos */}
            {blockIndex < TIMELINE.length - 1 && (
              <div
                aria-hidden="true"
                className="mt-12 flex items-center gap-3 md:mt-16"
              >
                <span className="rule-ornate h-px flex-1" />
                <span className="font-retro text-[11px] tracking-[0.3em] text-ash">
                  ✞
                </span>
                <span className="rule-ornate h-px flex-1" />
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* fim da linha */}
      <div className="mt-14 pl-10 md:pl-16">
        <p className="font-retro text-[12px] tracking-[0.22em] text-mist/70 uppercase">
          to be continued
          <span className="animate-caret ml-1 text-blood-bright">█</span>
        </p>
      </div>
    </div>
  );
}

export default Timeline;
