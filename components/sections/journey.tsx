import { Reveal } from "@/components/reveal";
import { SectionHeading } from "./section-heading";
import { journey } from "@/lib/data";

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading eyebrow="04 — Journey" title="Where I've been, and" accent="where next." />

      <ol className="relative ml-3 space-y-12 border-l border-white/10 pl-10 sm:ml-0 sm:pl-14">
        {journey.map((j, i) => (
          <Reveal as="li" key={j.title} delay={i * 100} className="relative">
            <span
              aria-hidden
              className="absolute -left-[3.15rem] top-1.5 grid size-4 place-items-center rounded-full border border-primary/60 bg-background sm:-left-[4.15rem]"
            >
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {j.period}
            </p>
            <h3 className="text-2xl font-medium tracking-tight">{j.title}</h3>
            <p className="mt-1 text-sm text-foreground/60">{j.place}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{j.detail}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
