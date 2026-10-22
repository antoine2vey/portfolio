import fs from "node:fs";
import mdx from "@mdx-js/rollup";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { type Plugin, defineConfig } from "vite";

function mdxSlugs(dir: string): Set<string> {
  return new Set(
    fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.slice(0, -".mdx".length)),
  );
}

// MDX is bundled, not executed, at build time, so the loader's own check
// would only surface as a runtime 500.
function projectTranslations(): Plugin {
  return {
    name: "project-translations",
    buildStart() {
      const french = mdxSlugs("src/content/projects");
      const english = mdxSlugs("src/content/projects/en");
      const problems = [
        ...[...french]
          .filter((slug) => !english.has(slug))
          .map((slug) => `missing src/content/projects/en/${slug}.mdx`),
        ...[...english]
          .filter((slug) => !french.has(slug))
          .map(
            (slug) => `src/content/projects/en/${slug}.mdx has no French file`,
          ),
      ];
      if (problems.length > 0) {
        this.error(
          `Project translations are out of sync:\n  - ${problems.join("\n  - ")}`,
        );
      }
    },
  };
}

export default defineConfig({
  server: { port: 3000 },
  resolve: { tsconfigPaths: true },
  plugins: [
    projectTranslations(),
    mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
    tanstackStart(),
    nitro({
      routeRules: {
        "/**": {
          headers: {
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
          },
        },
      },
    }),
    viteReact(),
  ],
});
