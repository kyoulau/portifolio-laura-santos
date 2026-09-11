import { type BlogPostProps } from "../../types/blog";

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="relative mx-auto max-w-3xl border border-ash bg-crypt/60 texture-noise">
      <div className="flex items-center gap-2 border-b border-ash/70 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-blood" />
        <span className="h-2 w-2 rounded-full bg-ash" />
        <span className="h-2 w-2 rounded-full bg-ash" />
        <span className="ml-2 font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
          entry_{post.id}.md
        </span>
      </div>

      <div className="p-8 md:p-12">
        <header className="mb-8 border-b border-ash pb-6">
          <h1 className="font-display text-3xl leading-snug font-medium text-bone md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <span className="font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
              published{" "}
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
        </header>

        <div className="prose prose-invert max-w-none text-mist">
          {post.content}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
