import Image from "next/image";
import { cn } from "@/utils/general";

interface NFTImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function NFTImage({ src, alt, className }: NFTImageProps) {
  return (
    <div className={cn("relative mb-6 lg:mb-0 lg:p-2", className)}>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          alt={alt}
          fill
          className="h-full w-full object-cover"
          src={src}
        />
      </div>
    </div>
  );
}
