// Runs automatically after `npm run build` (see "postbuild" in package.json).
//
// Next.js static export writes page-preload files in sub-folders, e.g.
//   out/en/free-trial/__next.$d$lang/free-trial/__PAGE__.txt
// but the browser requests them with dots instead of slashes:
//   out/en/free-trial/__next.$d$lang.free-trial.__PAGE__.txt
// Static hosts (GitHub Pages) cannot rewrite URLs, so we add a copy under the dotted name.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const out = "out";
let copied = 0;

function filesIn(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? filesIn(p) : [p];
  });
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const file of filesIn(p)) {
        const dotted = join(dir, `${name}.${relative(p, file).split(sep).join(".")}`);
        if (!existsSync(dotted)) { copyFileSync(file, dotted); copied++; }
      }
    } else {
      walk(p);
    }
  }
}

if (existsSync(out)) walk(out);
console.log(`flatten-prefetch: added ${copied} preload file copies`);
