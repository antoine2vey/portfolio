# antoinedeveyrac.fr

Portfolio site built with [TanStack Start](https://tanstack.com/start). Every page is server-rendered, so crawlers get the full HTML, metadata and JSON-LD without running JavaScript.

## Develop

```bash
yarn
yarn dev
```

Open http://localhost:3000.

## Layout

- `src/routes/` holds one file per URL. Pages live under `{-$locale}/`, an optional segment. French is served at `/resume` and English at `/en/resume`. Any other prefix returns 404. `_withHeader` is a layout route that adds the site header to `/resume` and `/project/$slug`.
- `src/content/projects/*.mdx` holds one file per project. Frontmatter drives the project list, metadata and JSON-LD. The body renders as the project description.
- `src/lib/seo.tsx` builds every page's title, meta tags, canonical and hreflang links, and JSON-LD.
- `robots[.]txt.ts` and `sitemap[.]xml.ts` are server routes for `/robots.txt` and `/sitemap.xml`.
- `image.ts` serves `/image`, which resizes project screenshots from the GCS bucket and re-encodes them as AVIF or WebP based on the `Accept` header. `src/lib/image.ts` builds the matching `srcset`.
- Security headers are set for every response in `vite.config.ts` under `routeRules`.

## Translations

French is the default locale. `src/lib/i18n.ts` lists the locales and maps each one to its URL prefix. Page copy lives in `src/messages/fr.ts` and `src/messages/en.ts`. The English object is typed from the French one, so a missing or extra key fails `tsc`. Each project needs two files, `src/content/projects/<slug>.mdx` and `src/content/projects/en/<slug>.mdx`. The English file sets `summary` and, optionally, `title`, `roles` and `links` in its frontmatter, and its body replaces the French description. Every other field comes from the French file. `yarn dev` and `yarn build` fail if either file of a pair is missing.

## Build and run

```bash
yarn build
yarn start
```

The build writes a self-contained server to `.output/`. The Dockerfile builds it and runs `node .output/server/index.mjs` on port 3000.

## Check SEO output

`scripts/seo-snapshot.mjs` fetches every route from a running server and writes one JSON file per route with the status, security headers, title, meta tags, links, JSON-LD, headings, images and visible text. To compare two versions of the site, snapshot both and diff the directories:

```bash
node scripts/seo-snapshot.mjs http://localhost:3000 /tmp/before
# change and rebuild, then:
node scripts/seo-snapshot.mjs http://localhost:3000 /tmp/after
git diff --no-index /tmp/before /tmp/after
```
