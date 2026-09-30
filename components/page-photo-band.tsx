import Image from "next/image";

export function PagePhotoBand({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <figure className={`page-photo-band ${className}`.trim()} aria-hidden="true">
      <div className="page-photo-band-frame">
        <Image
          className="page-photo-band-image"
          src={src}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 920px"
        />
      </div>
    </figure>
  );
}
