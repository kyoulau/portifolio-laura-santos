import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { type BlogListProps } from "../../types/blog";
import Reveal from "../Reveal";

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {posts.map((post, index) => (
        <Reveal key={post.id} delay={index * 80}>
          <Link
            to={`/blog/${post.id}`}
            className="group relative block h-full border border-ash bg-crypt/60 p-6 transition-colors duration-500 hover:border-blood-bright/60 md:p-7"
          >
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-0 w-px bg-blood-bright/0 transition-colors duration-500 group-hover:bg-blood-bright/70"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-ash/70 px-2.5 py-1 font-retro text-[10px] tracking-[0.14em] text-mist uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-4 font-display text-2xl leading-snug font-medium text-bone transition-colors duration-300 group-hover:text-blood-bright md:text-3xl">
              {post.title}
            </h2>

            <p className="mt-3 text-[15px] leading-relaxed text-mist">
              {post.excerpt}
            </p>

            <span className="mt-6 inline-flex items-center gap-1.5 font-retro text-[11px] tracking-[0.18em] text-crt uppercase">
              read entry
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </Reveal>
      ))}

      <Reveal delay={posts.length * 80}>
        <div className="flex h-full min-h-[220px] flex-col items-center justify-center border border-dashed border-ash/70 p-6 text-center">
          <p className="font-retro text-[12px] tracking-[0.2em] text-mist/60 uppercase">
            more entries brewing
            <span className="animate-caret ml-1 text-blood-bright">█</span>
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default BlogList;
