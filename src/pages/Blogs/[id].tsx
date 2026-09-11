import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../../data/blogPosts";
import BlogPost from "../../components/BlogPost/BlogPost";
import Reveal from "../../components/Reveal";
import Footer from "../../components/footer";

const SinglePostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id, 10) : NaN;
  const post = blogPosts.find((post) => post.id === postId);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-bone">
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
        {!post ? (
          <Reveal>
            <div className="border border-ash bg-crypt/60 px-8 py-16 text-center">
              <p className="font-retro text-[12px] tracking-[0.3em] text-blood-bright uppercase">
                404
              </p>
              <h1 className="mt-4 font-display text-3xl text-bone">
                Entry not found
              </h1>
              <p className="mt-3 text-mist">
                The post you're looking for doesn't exist.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <BlogPost post={post} />
          </Reveal>
        )}

        <Reveal>
          <div className="mt-16 flex justify-center">
            <Link
              to="/blog"
              className="group flex items-center gap-3 border border-ash px-6 py-3 font-retro text-[12px] tracking-[0.22em] text-mist uppercase transition-colors duration-300 hover:border-blood-bright/70 hover:text-bone"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              back to field notes
            </Link>
          </div>
        </Reveal>

        <Footer />
      </div>
    </div>
  );
};

export default SinglePostPage;
