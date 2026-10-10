import { Reveal } from "@/components/reveal";
import { SectionHeading } from "./section-heading";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading eyebrow="01 — About" title="Backend-first, with an eye for" accent="how things feel." />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className={i === 0 ? "text-xl text-foreground/90" : undefined}>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-500 hover:border-primary/40">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:bg-primary/20"
                />
                <p className="font-serif text-5xl italic text-gradient">{s.value}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
