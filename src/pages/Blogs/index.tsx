import { ArrowUpRight } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import BlogList from "../../components/BlogList";
import Reveal from "../../components/Reveal";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/footer";
import { blogPosts } from "../../data/blogPosts";

const MEDIUM_URL = "https://medium.com/@laucosan05";

function Blogs() {
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 md:px-10">
        {/* ——————————————————————————————
            HEADER
           —————————————————————————————— */}
        <Reveal>
          <p className="font-retro text-[12px] tracking-[0.3em] text-crt uppercase">
            C:\&gt; cat ./blog/*.md
            <span className="animate-caret ml-1">_</span>
          </p>

          <h1 className="animate-flicker mt-5 font-display text-5xl leading-[0.95] font-light tracking-tight md:text-7xl">
            <span className="text-bone">Field </span>
            <span className="glow-blood font-blackletter text-blood-bright">
              Notes
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Thoughts on books, code, and everything in between.
          </p>
        </Reveal>

        {/* ——————————————————————————————
            POSTS LOCAIS
           —————————————————————————————— */}
        <section className="mt-20 md:mt-24">
          <SectionTitle index="01" kicker="local_entries" />
          <BlogList posts={blogPosts} />
        </section>

        {/* ——————————————————————————————
            MEDIUM
           —————————————————————————————— */}
        <section className="mt-20 md:mt-24">
          <SectionTitle index="02" kicker="on_medium" />

          <Reveal>
            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-start gap-5 border border-ash bg-crypt/60 p-7 transition-colors duration-500 hover:border-blood-bright/60 sm:flex-row sm:items-center sm:justify-between md:p-9"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-0 w-px bg-blood-bright/0 transition-colors duration-500 group-hover:bg-blood-bright/70"
              />

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ash text-mist transition-colors duration-300 group-hover:border-blood-bright/60 group-hover:text-blood-bright">
                  <FaMedium size={22} />
                </span>
                <div>
                  <p className="font-retro text-[11px] tracking-[0.2em] text-mist uppercase">
                    @laucosan05
                  </p>
                  <h3 className="mt-1 font-display text-2xl leading-snug text-bone md:text-3xl">
                    More writing on Medium
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-mist">
                    Longer-form articles and technical deep dives — including
                    data structures, Java, and whatever else I'm learning.
                  </p>
                </div>
              </div>

              <span className="flex shrink-0 items-center gap-2 border border-ash px-5 py-2.5 font-retro text-[12px] tracking-[0.18em] text-mist uppercase transition-colors duration-300 group-hover:border-blood-bright/70 group-hover:text-bone">
                Read on Medium
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </Reveal>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Blogs;
