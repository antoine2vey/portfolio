# antoinedeveyrac.fr

Portfolio site built with [TanStack Start](https://tanstack.com/start). Every page is server-rendered, so crawlers get the full HTML, metadata and JSON-LD without running JavaScript.

## Develop

```bash
yarn
yarn dev
```

Open http://localhost:3000.

## Layout

- `src/routes/` holds one file per URL. `_withHeader` is a layout route that adds the site header to `/resume` and `/project/$slug`.
- `src/content/projects/*.mdx` holds one file per project. Frontmatter drives the project list, metadata and JSON-LD. The body renders as the project description.
- `src/lib/seo.tsx` builds every page's title, meta tags, canonical link and JSON-LD.
- `robots[.]txt.ts` and `sitemap[.]xml.ts` are server routes for `/robots.txt` and `/sitemap.xml`.
- `image.ts` serves `/image`, which resizes project screenshots from the GCS bucket and re-encodes them as AVIF or WebP based on the `Accept` header. `src/lib/image.ts` builds the matching `srcset`.
- Security headers are set for every response in `vite.config.ts` under `routeRules`.

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
