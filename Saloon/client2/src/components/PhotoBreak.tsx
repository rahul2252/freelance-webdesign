import Image from "next/image";
import { clientConfig } from "@/client.config";

export default function PhotoBreak() {
  const { image, alt } = clientConfig.photoBreak;

  return (
    <div className="relative h-[45vh] min-h-[280px] w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover"
      />
    </div>
  );
}
