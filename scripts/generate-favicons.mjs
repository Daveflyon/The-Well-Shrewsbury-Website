import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'public/images/the-well-mark.png');
const outDir = path.join(root, 'public/images');

const trimmed = await sharp(input).trim().toBuffer({ resolveWithObject: true });
const { width, height } = trimmed.info;
const squareSize = Math.max(width, height);

const square = await sharp(trimmed.data)
  .extend({
    top: Math.floor((squareSize - height) / 2),
    bottom: Math.ceil((squareSize - height) / 2),
    left: Math.floor((squareSize - width) / 2),
    right: Math.ceil((squareSize - width) / 2),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

await sharp(square).resize(32, 32).png().toFile(path.join(outDir, 'favicon-32.png'));
await sharp(square).resize(180, 180).png().toFile(path.join(outDir, 'apple-touch-icon.png'));

console.log('Generated favicon-32.png and apple-touch-icon.png');
