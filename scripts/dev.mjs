import * as esbuild from "esbuild";
import { mkdirSync, copyFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outdir = path.join(root, "dist");
const assetsDir = path.join(outdir, "assets");
mkdirSync(assetsDir, { recursive: true });

copyFileSync(path.join(root, "src/styles/global.css"), path.join(assetsDir, "style.css"));
copyFileSync(path.join(root, "index.html"), path.join(outdir, "index.html"));
if (existsSync(path.join(root, "public/favicon.svg"))) {
  copyFileSync(path.join(root, "public/favicon.svg"), path.join(outdir, "favicon.svg"));
}

const ctx = await esbuild.context({
  entryPoints: [path.join(root, "src/main.tsx")],
  bundle: true,
  sourcemap: true,
  format: "esm",
  target: ["es2020"],
  outfile: path.join(assetsDir, "bundle.js"),
  loader: { ".tsx": "tsx", ".ts": "ts" },
  jsx: "automatic",
  logLevel: "info",
});

await ctx.watch();
const { host, port } = await ctx.serve({ servedir: outdir, port: 5173 });
console.log(`\nDev server running → http://localhost:${port}`);
