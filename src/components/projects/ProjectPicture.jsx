export default function ProjectPicture({ preview, className }) {
  if (!preview) return null;

  return (
    <picture>
      <source type="image/avif" srcSet={preview.avif} />
      <source type="image/webp" srcSet={preview.webp} />
      <img
        src={preview.webp}
        width={preview.width}
        height={preview.height}
        alt={preview.alt}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
