import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const INPUT  = new URL("../public/logo.jpeg", import.meta.url).pathname.slice(1);
const OUTPUT = new URL("../public/logo.png",  import.meta.url).pathname.slice(1);

const img    = sharp(INPUT);
const meta   = await img.metadata();
const { width: W, height: H } = meta;

// Get raw RGBA data
const { data } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const pixels = new Uint8Array(data);

const idx = (x, y) => (y * W + x) * 4;

// Flood fill from the 4 corners — marks background pixels (white/near-white)
const THRESHOLD = 30;
const visited   = new Uint8Array(W * H);
const queue     = [];

const isBackground = (x, y) => {
  const i = idx(x, y);
  return pixels[i] >= 255 - THRESHOLD &&
         pixels[i+1] >= 255 - THRESHOLD &&
         pixels[i+2] >= 255 - THRESHOLD;
};

const enqueue = (x, y) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const pos = y * W + x;
  if (visited[pos] || !isBackground(x, y)) return;
  visited[pos] = 1;
  queue.push([x, y]);
};

// Seed from all 4 corners
enqueue(0, 0); enqueue(W-1, 0); enqueue(0, H-1); enqueue(W-1, H-1);

while (queue.length) {
  const [x, y] = queue.pop();
  const i = idx(x, y);
  pixels[i+3] = 0; // make transparent

  enqueue(x+1, y); enqueue(x-1, y);
  enqueue(x, y+1); enqueue(x, y-1);
}

// Save result as PNG, trimming the transparent edges
await sharp(Buffer.from(pixels), { raw: { width: W, height: H, channels: 4 } })
  .trim({ threshold: 10 })
  .png()
  .toFile(OUTPUT);

console.log(`Done → ${OUTPUT}`);
