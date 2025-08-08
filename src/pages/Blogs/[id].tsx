import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import BlogPost from '../../components/BlogPost/BlogPost';

const SinglePostPage = () => {

  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id, 10) : NaN;
  const post = blogPosts.find(post => post.id === postId);

  
  if (!post) {
    return (
      <div>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-white">Post não encontrado</h1>
          <p className="text-gray-400 mt-4">O post que você está procurando não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 min-h-screen font-inter">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true" 
      />
      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-start max-w-7xl mx-auto">
        <BlogPost post={post} />
      </div>
    </div>
  );
};

export default SinglePostPage;