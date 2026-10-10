import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

// Unsplash stock photos (swap for your own any time).
const IMAGES = [
  "photo-1461749280684-dccba630e2f6",
  "photo-1555066931-4365d14bab8c",
  "photo-1518770660439-4636190af475",
  "photo-1498050108023-c5249f4df085",
  "photo-1515879218367-8466d910aaa4",
  "photo-1558494949-ef010cbdcc31",
  "photo-1517694712202-14dd9538aa97",
  "photo-1526374965328-7f61d4dc18c5",
].map((id) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`,
  alt: "Developer workspace",
}));

export default function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={IMAGES}
      className="h-[560px] w-full rounded-lg border border-border bg-background"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
        <div className="px-6">
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Every frame,
            <br />
            brought into focus.
          </h1>
        </div>
        <p className="max-w-md text-balance px-6 text-sm text-muted-foreground">
          Images curve in from one edge, flatten out at the centre, then fade
          away round the other.
        </p>
      </div>
    </TiltedGridHero>
  );
}
