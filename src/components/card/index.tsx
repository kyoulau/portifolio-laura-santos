import { ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}
function Card({ title, description, imageUrl, projectUrl }: CardProps) {

  return (
     <a 
      href={projectUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <ExternalLink size={20} className="text-purple-400" />
      </div>
      <img 
        src={imageUrl} 
        alt={`Imagem do projeto ${title}`} 
        className="w-full h-40 object-cover rounded-md mb-4" 
      />
      <p className="text-neutral-300 text-sm">
        {description}
      </p>
    </a>
  );
}

export default Card;