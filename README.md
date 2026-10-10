# Pruthviraj Ubale — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui structure.
The hero is the curved **Tilted Grid** component (`components/ui/tilted-grid-hero.tsx`).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Make it yours (all in `lib/data.ts`)

- `profile.email`, `profile.linkedin` — replace the placeholders.
- `profile.resume` — put your PDF in `/public` and match the file name.
- `projects[].github` — point each card to its exact repository.
- Hero photos: the `heroImages` list (any image URLs work).

## Why `components/ui`?

shadcn's CLI installs and updates primitives into `components/ui` (see `components.json`),
and its generated code imports from `@/components/ui/...` and `@/lib/utils`. Keeping the
hero there means future `npx shadcn@latest add ...` commands, aliases and other
shadcn-based components all resolve without extra configuration.

## Add more shadcn components

```bash
npx shadcn@latest add card dialog tooltip
```

## Deploy

Push to GitHub and import the repo into Vercel — no config needed.
