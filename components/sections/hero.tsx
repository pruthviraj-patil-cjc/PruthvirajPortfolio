import { ArrowDownRight, Github, MapPin } from "lucide-react";

import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroImages, profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative">
      <TiltedGridHero
        images={heroImages}
        speed={4.5}
        tileHeight={27}
        axis={58}
        curve={78}
        fade={14}
        className="h-[100svh] min-h-[680px] w-full bg-background"
      >
        {/* Ambient aurora behind everything */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 size-[520px] rounded-full bg-violet/25 blur-[140px]" />
          <div className="absolute -right-32 bottom-10 size-[460px] rounded-full bg-cyan/15 blur-[140px]" />
          <div className="bg-dots absolute inset-0" />
        </div>

        {/* Legibility scrims above/below the band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-background via-background/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-background via-background/85 to-transparent"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pb-10 pt-28 text-center sm:pt-32">
          <div className="flex max-w-4xl flex-col items-center gap-6">
            <Badge variant="accent" className="gap-2.5">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary" />
                <span className="relative size-2 rounded-full bg-primary" />
              </span>
              {profile.status}
            </Badge>

            <h1 className="text-balance text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
              Hi, I&apos;m{" "}
              <span className="font-serif italic text-gradient">Pruthviraj</span>
              <br />
              <span className="text-foreground/90">I build things that run.</span>
            </h1>
          </div>

          <div className="flex max-w-xl flex-col items-center gap-6">
            <p className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="#work">
                  View my work <ArrowDownRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
            </div>

            <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
              <MapPin className="size-3.5" /> {profile.location}
            </p>
          </div>
        </div>
      </TiltedGridHero>
    </section>
  );
}
