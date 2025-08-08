
// import Footer from "../../components/footer";
import BlogList from "../../components/BlogList";
import { blogPosts } from "../../data/blogPosts";

function Blogs() {
  return (
    <div className="bg-neutral-800 min-h-screen font-inter">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true" 
      />
      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-start max-w-7xl mx-auto">
        <BlogList posts={blogPosts}/>
      </div>

      
    </div>
  );
}

export default Blogs;
