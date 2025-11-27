import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Feature {
  type: "image" | "text";
  image?: {
    src: string;
    alt: string;
  };
  value?: string;
  label: string;
}

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl px-6 py-6 md:px-10 md:py-6 lg:px-12 lg:py-8",
        "min-w-[100px] text-center md:min-w-[140px] lg:min-w-[180px]",
        "border border-white/15 bg-white/[0.05] backdrop-blur-[6.8px]",
        "shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        "gap-2",
        className,
      )}
    >
      {feature.type === "image" && feature.image ? (
        <div className="mb-2 flex justify-center">
          <Image
            alt={feature.image.alt}
            src={feature.image.src}
            width={48}
            height={48}
            className="h-12 w-12 object-contain opacity-90"
          />
        </div>
      ) : (
        <div className="mb-2 text-5xl leading-none font-bold text-white">
          {feature.value}
        </div>
      )}
      <div className="text-xs text-white/60 md:text-sm lg:text-base">
        {feature.label}
      </div>
    </div>
  );
}

interface FeaturesProps {
  className?: string;
}

export default function Features({ className }: FeaturesProps) {
  const features: Feature[] = [
    {
      type: "image",
      image: {
        src: "https://pulsarmoney.b-cdn.net/bloom/diamond.png",
        alt: "OG Pass",
      },
      label: "OG Pass",
    },
    {
      type: "text",
      value: "2",
      label: "Phases",
    },
    {
      type: "text",
      value: "1K",
      label: "Total",
    },
  ];

  return (
    <div
      className={cn(
        "mb-8 flex flex-row justify-center gap-3 md:mb-16 md:gap-6",
        className,
      )}
    >
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
}
