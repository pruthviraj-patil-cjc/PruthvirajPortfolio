import { ArrowUpRight, Github } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ p, className }: { p: Project; className?: string }) {
  return (
    <a
      href={p.github}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40",
        className,
      )}
    >
      {/* Image header with blend into card */}
      <div className="relative h-52 overflow-hidden sm:h-64">
        <img
          src={p.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <span className="absolute left-5 top-5 font-mono text-xs tracking-widest text-foreground/70">
          {p.index} / 03
        </span>
        <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-7 pt-2">
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {p.kicker}
          </p>
          <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{p.title}</h3>
        </div>

        <p className="leading-relaxed text-muted-foreground">{p.description}</p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {p.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
          <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            <Github className="size-3.5" /> Code
          </span>
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading eyebrow="03 — Selected Work" title="Projects that show how I" accent="think." />

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="lg:col-span-2">
          <ProjectCard p={featured} className="lg:flex-row lg:[&>div:first-child]:h-auto lg:[&>div:first-child]:w-[46%] lg:[&>div:first-child]:shrink-0" />
        </Reveal>
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
