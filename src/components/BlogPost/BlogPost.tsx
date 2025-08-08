import { type BlogPostProps } from '../../types/blog';

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="max-w-3xl mx-auto bg-neutral-900 rounded-lg p-8 border border-zinc-800 mt-16">
      <header className="mb-8 pb-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">
            Publicado em: {new Date(post.date).toLocaleDateString()}
          </span>
          
          <div className="flex gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      <div className="prose prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
};

export default BlogPost;