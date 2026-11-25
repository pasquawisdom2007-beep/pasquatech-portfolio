import * as esbuild from "esbuild";
import { mkdirSync, copyFileSync, cpSync, existsSync, readdirSync, rmSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outdir = path.join(root, "dist");
const assetsDir = path.join(outdir, "assets");

if (existsSync(outdir)) rmSync(outdir, { recursive: true, force: true });
mkdirSync(assetsDir, { recursive: true });

await esbuild.build({
  entryPoints: [path.join(root, "src/main.tsx")],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "esm",
  target: ["es2020"],
  outfile: path.join(assetsDir, "bundle.js"),
  loader: { ".tsx": "tsx", ".ts": "ts" },
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "info",
});

copyFileSync(path.join(root, "src/styles/global.css"), path.join(assetsDir, "style.css"));
copyFileSync(path.join(root, "index.html"), path.join(outdir, "index.html"));

const publicDir = path.join(root, "public");
if (existsSync(publicDir)) {
  for (const entry of readdirSync(publicDir)) {
    cpSync(path.join(publicDir, entry), path.join(outdir, entry), { recursive: true });
  }
}

console.log("\nBuild complete → dist/");
