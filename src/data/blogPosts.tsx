import { type BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Antes tarde do que nunca",
    excerpt: "Post de inauguração do meu portifólio",
    date: "2023-05-15",
    tags: ["React"],
    content: (
      <>
        {/* <h2 className="text-xl font-semibold mt-6 mb-3 text-neutral-200">O que são Hooks?</h2>
        <p className="mb-4 text-gray-200">Hooks são uma adição ao React 16.8 que permitem usar state e outros recursos do React sem escrever classes.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-200">useState</h2>
        <p className="mb-4 text-gray-200">O useState é o Hook mais básico para gerenciar estado em componentes funcionais.</p>
        
        <pre className=" text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`const [count, setCount] = useState(0);`}
        </pre> */}
      </>
    )
  },
];