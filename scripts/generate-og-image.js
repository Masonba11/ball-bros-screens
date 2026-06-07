import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(fileURLToPath(import.meta.url));
const publicDir = join(root, '..', 'public');
const logoPath = join(publicDir, 'logo.png');
const outPath = join(publicDir, 'og-image.jpg');

const width = 1200;
const height = 630;
const bg = { r: 30, g: 34, b: 38 };

const logo = sharp(logoPath).resize(520, null, { fit: 'inside' });
const logoMeta = await logo.metadata();
const logoBuffer = await logo.toBuffer();
const logoW = logoMeta.width ?? 520;
const logoH = logoMeta.height ?? 390;
const left = Math.round((width - logoW) / 2);
const top = Math.round((height - logoH) / 2);

await sharp({
  create: { width, height, channels: 3, background: bg },
})
  .composite([{ input: logoBuffer, left, top }])
  .jpeg({ quality: 88 })
  .toFile(outPath);

console.log(`[og] og-image.jpg → ${outPath} (${width}x${height})`);
