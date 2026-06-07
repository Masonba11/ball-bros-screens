import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(fileURLToPath(import.meta.url));
const publicDir = join(root, '..', 'public');
const input = join(publicDir, 'logo.png');

function isOrange(r, g, b) {
  return r > 140 && g > 65 && b < 110 && r > g && r - b > 80;
}

function isTan(r, g, b) {
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 150 && r > 170 && g > 140 && b > 100;
}

function lightGrayForDarkBg(r, g, b) {
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (lum < 45) return [238, 241, 244];
  if (lum < 80) return [224, 228, 234];
  if (lum < 115) return [200, 208, 216];
  if (lum < 140) return [184, 196, 208];
  return [168, 180, 192];
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const out = Buffer.from(data);

for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const a = out[i + 3];

  if (a < 20 || isOrange(r, g, b) || isTan(r, g, b)) continue;

  const [nr, ng, nb] = lightGrayForDarkBg(r, g, b);
  out[i] = nr;
  out[i + 1] = ng;
  out[i + 2] = nb;
}

const pngPath = join(publicDir, 'logo-footer.png');
const webpPath = join(publicDir, 'logo-footer.webp');

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(pngPath);

await sharp(pngPath).webp({ quality: 90 }).toFile(webpPath);

writeFileSync(pngPath, await sharp(pngPath).png().toBuffer());
console.log(`[logo] footer variant → ${pngPath}`);
console.log(`[logo] footer variant → ${webpPath}`);
