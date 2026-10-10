import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 sm:pt-36">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card px-8 py-20 text-center sm:px-16 sm:py-28">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />
            <div className="absolute -bottom-40 -right-20 size-[400px] rounded-full bg-violet/25 blur-[130px]" />
            <div className="bg-dots absolute inset-0 opacity-60" />
          </div>

          <div className="relative">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              05 — Contact
            </p>
            <h2 className="mx-auto max-w-3xl text-balance text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl">
              Let&apos;s build something{" "}
              <span className="font-serif italic text-gradient">worth shipping.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
              I&apos;m open to fresher Java Backend and Full Stack roles. If you think I could be a
              fit, I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${profile.email}`}>
                  <Mail /> Say hello <ArrowUpRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind & shadcn/ui.</p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
}
