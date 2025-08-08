import { Link } from 'react-router-dom';
import { type BlogListProps } from '../../types/blog'

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">My blogs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            to={`/blog/${post.id}`} 
            key={post.id}
            className="group"
          >
            <div className="h-full bg-neutral-900 rounded-lg p-6 border border-stone-800 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-gray-600">
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-gray-500 transition">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-indigo-950 text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;