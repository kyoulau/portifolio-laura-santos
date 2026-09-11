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
      className="group relative block border border-ash bg-crypt/60 transition-colors duration-500 hover:border-blood-bright/60"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-0 w-px bg-blood-bright/0 transition-colors duration-500 group-hover:bg-blood-bright/70"
      />

      <div className="relative overflow-hidden texture-scanlines">
        <img
          src={imageUrl}
          alt={`Imagem do projeto ${title}`}
          loading="lazy"
          className="photo-goth aspect-video w-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl leading-snug font-medium text-bone">
            {title}
          </h3>
          <ExternalLink
            size={16}
            className="mt-1.5 shrink-0 text-mist transition-colors duration-300 group-hover:text-blood-bright"
          />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-mist">{description}</p>
      </div>
    </a>
  );
}

export default Card;
