import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Timeline from "../../components/timeline";
import PhotoFrame from "../../components/PhotoFrame";
import Reveal from "../../components/Reveal";
import SectionTitle from "../../components/SectionTitle";

import heroPhoto from "../../images/imagem-lau.jpg";
import starePhoto from "../../images/imagem-lau-ollhar-fixo.jpg";
import cutePhoto from "../../images/imagem-lau-fofa.jpg";
import conferencePhoto from "../../images/code-con-lau.jpg";
import cameraPhoto from "../../images/image-lau-camera-1-mao-na-camera.jpg";
import cafePhoto from "../../images/cafe.jpg";

const GOALS = [
  "Get AWS certified",
  "Achieve Dean's List prize",
  "Reach B1 level in German",
  "Finish my degree",
];

function Sobre() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-bone">
      {/* fundo: malha de monitor + brilho vermelho */}
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
            <div className="animate-drift">
              <PhotoFrame
                src={heroPhoto}
                alt="Laura Santos olhando para a câmera"
                label="lau.exe"
                imgClassName="aspect-[4/5] object-[28%_center]"
              />
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal delay={120}>
              <p className="font-retro text-[12px] tracking-[0.3em] text-crt uppercase">
                C:\&gt; whoami
                <span className="animate-caret ml-1">_</span>
              </p>

              <h1 className="animate-flicker mt-5 font-display text-6xl leading-[0.95] font-light tracking-tight md:text-8xl">
                <span className="text-bone">Hi! I&apos;m </span>
                <span className="glow-blood font-blackletter text-blood-bright">
                  Lau
                </span>
                <span className="text-bone">!</span>
              </h1>

              <div className="mt-8 max-w-xl border-l border-blood-bright/50 pl-6">
                <p className="text-xl leading-relaxed text-mist md:text-2xl">
                  Your favorite software engineer currently pursuing a degree in
                  Information Systems, passionate about the{" "}
                  <em className="text-bone not-italic underline decoration-blood-bright/60 underline-offset-4">
                    goth aesthetic
                  </em>{" "}
                  and{" "}
                  <em className="text-bone not-italic underline decoration-crt/60 underline-offset-4">
                    retro tech
                  </em>
                  !
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Curitiba, BR", "she/her", "always cold"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="border border-ash px-3 py-1.5 font-retro text-[11px] tracking-[0.16em] text-mist uppercase"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——————————————————————————————
            ORIGIN STORY
           —————————————————————————————— */}
        <section className="mt-40 md:mt-56">
          <SectionTitle index="01" kicker="origin_story" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-lg leading-[1.85] text-mist md:text-xl">
                  <span className="float-left mt-2 mr-3 font-blackletter text-6xl leading-[0.8] text-blood-bright md:text-7xl">
                    M
                  </span>
                  y journey with computers began in childhood. I always preferred
                  exploring the computer with my brother at my parents&apos;
                  house, playing games rather than playing with my dolls. Always
                  very curious and exploratory, over time I became more
                  interested in how things worked inside the machine.
                </p>
              </Reveal>

              <Reveal delay={80}>
                <p className="mt-7 text-lg leading-[1.85] text-mist md:text-xl">
                  So I started my studies with a comprehensive computer course to
                  understand how computers functioned. At the time, my mom was a
                  huge influence in helping me develop a passion for the field;
                  she always supported my studies and encouraged me to be a role
                  model for other women in the area.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <blockquote className="mt-10 border-l-2 border-blood-bright/70 py-2 pl-6">
                  <p className="font-display text-2xl leading-snug text-bone italic md:text-3xl">
                    After finishing that course, I discovered my calling. I
                    decided I wanted to turn my ideas into apps and websites.
                  </p>
                  <cite className="mt-3 block font-retro text-[11px] tracking-[0.22em] text-mist uppercase not-italic">
                    — where it all clicked
                  </cite>
                </blockquote>
              </Reveal>
            </div>

            <Reveal delay={120} className="md:col-span-5">
              <PhotoFrame
                src={starePhoto}
                alt="Laura Santos com a mão no rosto"
                label="memory_01.jpg"
                caption="still curious, still exploring"
                imgClassName="aspect-[3/4]"
              />
            </Reveal>
          </div>
        </section>

        {/* ——————————————————————————————
            TIMELINE
           —————————————————————————————— */}
        <section className="mt-40 md:mt-56">
          <SectionTitle index="02" kicker="timeline" />

          <Reveal>
            <p className="mb-16 max-w-2xl font-display text-2xl leading-snug text-bone md:text-3xl">
              Four years of logs, commits and{" "}
              <span className="text-blood-bright italic">a lot</span> of coffee.
            </p>
          </Reveal>

          <Timeline />
        </section>

        {/* ——————————————————————————————
            OFF THE CLOCK
           —————————————————————————————— */}
        <section className="mt-40 md:mt-56">
          <SectionTitle index="03" kicker="off_the_clock" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
            <Reveal className="md:col-span-5">
              <PhotoFrame
                src={cutePhoto}
                alt="Laura Santos sorrindo"
                label="weekend.jpg"
                imgClassName="aspect-[4/5] object-[32%_center]"
              />
            </Reveal>

            <div className="md:col-span-7">
              <Reveal delay={100}>
                <p className="text-lg leading-[1.85] text-mist md:text-xl">
                  Laura, from Brazil, a 100% practicing Christian. Besides
                  programming, I enjoy reading the Bible, praying, and spending
                  time with my family — especially if we&apos;re going out to
                  eat. As a good nerd, I love the geek world, anime, and playing
                  outdoor games with my friends. On my weekends, I dedicate
                  myself to serving at my church, where I volunteer in the media
                  department and also with the children&apos;s ministry.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 grid grid-cols-2 gap-3">
                  {[
                    "faith",
                    "family",
                    "anime",
                    "church media",
                    "coffee shops",
                    "retro gadgets",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-ash/60 px-4 py-3"
                    >
                      <span className="text-blood-bright">✦</span>
                      <span className="font-retro text-[12px] tracking-[0.14em] text-mist uppercase">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal>
              <PhotoFrame
                src={conferencePhoto}
                alt="Laura Santos em uma conferência de tecnologia"
                caption="tech conferences"
                imgClassName="aspect-square"
              />
            </Reveal>
            <Reveal delay={90}>
              <PhotoFrame
                src={cameraPhoto}
                alt="Laura Santos segurando a câmera"
                caption="behind the lens"
                imgClassName="aspect-square"
              />
            </Reveal>
            <Reveal delay={180}>
              <PhotoFrame
                src={cafePhoto}
                alt="Cafeteria minimalista"
                caption="my second office"
                imgClassName="aspect-square"
              />
            </Reveal>
          </div>
        </section>

        {/* ——————————————————————————————
            GOALS
           —————————————————————————————— */}
        <section className="mt-40 md:mt-56">
          <SectionTitle index="04" kicker="goals.txt" />

          <Reveal>
            <div className="relative border border-ash bg-crypt/80 texture-noise">
              <div className="flex items-center gap-2 border-b border-ash px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-blood" />
                <span className="h-2 w-2 rounded-full bg-ash" />
                <span className="h-2 w-2 rounded-full bg-ash" />
                <span className="ml-2 font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
                  future_laura — goals.txt
                </span>
              </div>

              <ul className="space-y-4 px-5 py-8 md:px-10 md:py-10">
                {GOALS.map((goal, index) => (
                  <li
                    key={goal}
                    className="group flex items-baseline gap-4 font-retro text-base tracking-wide text-mist transition-colors duration-300 hover:text-bone md:text-lg"
                  >
                    <span className="text-crt">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-blood-bright">[ ]</span>
                    <span>{goal}</span>
                  </li>
                ))}

                <li className="flex items-baseline gap-4 pt-4 font-retro text-base text-mist/60 md:text-lg">
                  <span className="text-crt">05</span>
                  <span className="animate-caret text-blood-bright">█</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        {/* ——————————————————————————————
            FIM
           —————————————————————————————— */}
        <Reveal>
          <div className="mt-32 flex flex-col items-center gap-8 border-t border-ash pt-12">
            <p className="font-blackletter text-3xl text-blood-bright glow-blood">
              soli deo gloria
            </p>

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
      </div>
    </div>
  );
}

export default Sobre;
