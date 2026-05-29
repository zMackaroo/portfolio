import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Image
      src="/assets/logo.png"
      alt=""
      width={105}
      height={118}
      aria-hidden="true"
      className={cn("h-8 w-auto", className)}
    />
  );
}
