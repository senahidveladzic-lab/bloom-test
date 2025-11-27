import { cn } from "@/utils/general";

interface TimeCardProps {
  label: string;
  time: string;
  date: string;
  timezone?: string;
  className?: string;
}

export function TimeCard({
  label,
  time,
  date,
  timezone,
  className,
}: TimeCardProps) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col rounded-2xl p-4 lg:p-6",
        "bg-white/[0.18] backdrop-blur-[6.8px]",
        "border border-white/[0.5] shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="mb-2 text-xs text-white/60 lg:mb-3 lg:text-sm">
        {label}
      </div>
      <div className="space-y-0.5 lg:space-y-1">
        <div className="text-2xl leading-none font-bold text-white lg:text-3xl">
          {time}
        </div>
        <div className="text-2xl leading-none font-bold text-white lg:text-3xl">
          {date}
        </div>
        {timezone && (
          <div className="mt-1.5 text-xs text-white/40 lg:mt-2 lg:text-sm">
            {timezone}
          </div>
        )}
      </div>
    </div>
  );
}
