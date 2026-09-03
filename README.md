# The Carbon Coach — website

Next.js (App Router) + Tailwind v4 + shadcn/ui rebuild of carboncoach.co.uk.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds a static
export (`next build` with `output: "export"` → `out/`) and publishes it to
GitHub Pages.

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment →
Source: GitHub Actions**. For the custom domain, add `carboncoach.co.uk` under
**Settings → Pages → Custom domain** and point the DNS (Gravity Host) at GitHub
Pages — GitHub then commits a `CNAME` file for you.

The base path is handled automatically: the workflow reads it from
`actions/configure-pages`, so the site works both at
`https://<user>.github.io/carboncoach/` (before the domain is connected) and
at `https://carboncoach.co.uk/` (after). Anything served from `/public` must
go through the `asset()` helper in `src/lib/utils.ts` for that to work.

To check the static build locally: `npm run build` then serve `out/`
(e.g. `npx serve out`).

## Where things live

| What | Where |
|---|---|
| All page copy (verbatim from Leon's Word doc / current site) | `src/lib/site.ts` |
| Contact email + Calendly link | `siteConfig` in `src/lib/site.ts` |
| Deploy workflow | `.github/workflows/deploy.yml` |
| Colours (sampled from the logo) | `src/app/globals.css` |
| Sections | `src/components/sections/*` |
| shadcn components | `src/components/ui/*` (`components.json` is set up, so `npx shadcn add <component>` works) |
| Images | `public/images/` — logo (transparent, cropped), mark, headshot, presentation photo |

## Still to confirm with Leon

- **Calendly URL** — `siteConfig.calendlyUrl` is a placeholder.
- **Email address** — `siteConfig.email` uses `hello@carboncoach.co.uk` (what the current site shows); the mailbox still needs setting up with Gravity Host.
- **Contact form** — currently builds a `mailto:` link (no backend). Swap for a form service / server action once the mailbox exists (`src/components/contact-form.tsx`).
- **Organisation logos** — the "Organisations I have worked with" section is text-only until logos are supplied.
- **Testimonials** — none yet; add a section when Leon has some.

## Source assets

Leon's original files are in `assets/`.
