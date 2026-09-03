import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  className,
  light = false,
}: {
  title: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span
        aria-hidden
        className={cn("h-1 w-12 rounded-full", light ? "bg-amber" : "bg-teal")}
      />
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
