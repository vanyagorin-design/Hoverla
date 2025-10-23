interface Props {
  src: string;
  alt: string;
}

export default function ResponsiveImage({ src, alt }: Props) {
  return (
    <picture>
      <source srcSet={`${src}.avif`} type="image/avif" />
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img className="w-full h-auto" src={`${src}.jpg`} alt={alt} loading="lazy" />
    </picture>
  );
}
