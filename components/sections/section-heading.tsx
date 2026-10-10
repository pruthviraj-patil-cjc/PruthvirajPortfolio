import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  /** Word(s) rendered in the serif italic accent style */
  accent?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span className="h-px w-8 bg-primary/60" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
        {title}{" "}
        {accent && <span className="font-serif italic text-gradient">{accent}</span>}
      </h2>
    </Reveal>
  );
}
