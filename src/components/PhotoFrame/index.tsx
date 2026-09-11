type PhotoFrameProps = {
  src: string;
  alt: string;
  /** Legenda que aparece na barra de título da "janela" */
  label?: string;
  /** Nota em monoespaçada exibida abaixo da moldura */
  caption?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Foto dentro de uma moldura de monitor antigo: barra de título,
 * scanlines de CRT, grão de filme e cantos marcados.
 */
function PhotoFrame({
  src,
  alt,
  label,
  caption,
  className = "",
  imgClassName = "",
}: PhotoFrameProps) {
  return (
    <figure className={`group ${className}`}>
      <div className="relative border border-ash bg-crypt p-1.5 shadow-[0_0_60px_-15px_rgba(161,18,47,0.45)]">
        {label && (
          <div className="flex items-center gap-2 border-b border-ash/70 px-2 py-1.5">
            <span className="h-2 w-2 rounded-full bg-blood" />
            <span className="h-2 w-2 rounded-full bg-ash" />
            <span className="h-2 w-2 rounded-full bg-ash" />
            <span className="ml-1 font-retro text-[11px] tracking-[0.18em] text-mist uppercase">
              {label}
            </span>
          </div>
        )}

        <div className="relative overflow-hidden texture-scanlines texture-noise">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`photo-goth w-full object-cover ${imgClassName}`}
          />
        </div>

        {/* cantos */}
        <span className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t border-l border-blood-bright/70" />
        <span className="pointer-events-none absolute -top-px -right-px h-4 w-4 border-t border-r border-blood-bright/70" />
        <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b border-l border-blood-bright/70" />
        <span className="pointer-events-none absolute -right-px -bottom-px h-4 w-4 border-r border-b border-blood-bright/70" />
      </div>

      {caption && (
        <figcaption className="mt-3 font-retro text-[11px] tracking-[0.16em] text-mist uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default PhotoFrame;
