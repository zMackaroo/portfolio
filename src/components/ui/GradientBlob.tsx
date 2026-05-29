import Image from "next/image";
import { cn } from "@/lib/utils";

type GradientBlobProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
};

export function GradientBlob({
  src,
  alt = "",
  width,
  height,
  className,
}: GradientBlobProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={alt === ""}
      className={cn(
        "pointer-events-none absolute select-none object-contain opacity-50 blur-3xl",
        className,
      )}
    />
  );
}
