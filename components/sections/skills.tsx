import { Reveal } from "@/components/reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { marquee, skillGroups } from "@/lib/data";

const accents: Record<string, string> = {
  primary: "bg-primary shadow-[0_0_14px_var(--primary)]",
  violet: "bg-violet shadow-[0_0_14px_var(--violet)]",
  cyan: "bg-cyan shadow-[0_0_14px_var(--cyan)]",
};

export function Skills() {
  const loop = [...marquee, ...marquee];

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      {/* Infinite marquee strip */}
      <div
        aria-hidden
        className="mb-24 overflow-hidden border-y border-white/10 py-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-12">
          {loop.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-serif text-4xl italic text-foreground/80 sm:text-5xl"
            >
              {t}
              <span className="size-2 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="02 — Toolkit" title="The stack I" accent="reach for." />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-white/10 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="mb-6 flex items-center gap-3">
                  <span className={cn("size-2.5 rounded-full", accents[g.accent])} />
                  <h3 className="font-mono text-sm uppercase tracking-[0.2em]">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
