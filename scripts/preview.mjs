import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".map": "application/json",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
};

// Render (web service) injects PORT and requires binding to 0.0.0.0
const port = Number(process.env.PORT) || 4300;

async function resolveFile(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  const full = path.join(dist, clean);
  if (!full.startsWith(dist)) return path.join(dist, "index.html");
  try {
    const s = await stat(full);
    if (s.isFile()) return full;
  } catch {}
  return path.join(dist, "index.html"); // SPA fallback
}

createServer(async (req, res) => {
  try {
    const file = await resolveFile(req.url || "/");
    const ext = path.extname(file);
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": file.includes(`${path.sep}assets${path.sep}`)
        ? "public, max-age=31536000, immutable"
        : "no-cache",
    });
    res.end(body);
  } catch {
    res.writeHead(500);
    res.end("Server error");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`\nServer running → http://localhost:${port}`);
});
