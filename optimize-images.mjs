import sharp from "sharp";
import fs from "fs";
import path from "path";

const DIRS = ["public/images/gallery", "public/images/hero", "public/images/detail"];
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1920;
const QUALITY = 78;

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  for (const file of files) {
    const filePath = path.join(dir, file);
    const inputBuffer = fs.readFileSync(filePath);
    const sizeBefore = inputBuffer.length;
    totalBefore += sizeBefore;

    try {
      const meta = await sharp(inputBuffer).metadata();

      const needsResize =
        (meta.width && meta.width > MAX_WIDTH) ||
        (meta.height && meta.height > MAX_HEIGHT);
      const isLarge = sizeBefore > 150 * 1024;

      if (!needsResize && !isLarge) {
        totalAfter += sizeBefore;
        continue;
      }

      let pipeline = sharp(inputBuffer).rotate();

      if (needsResize) {
        pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      const ext = path.extname(file).toLowerCase();
      if (ext === ".png") {
        pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
      } else {
        pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
      }

      const outputBuffer = await pipeline.toBuffer();
      const sizeAfter = outputBuffer.length;

      if (sizeAfter < sizeBefore * 0.9) {
        fs.writeFileSync(filePath, outputBuffer);
        const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(0);
        console.log(
          `${file}: ${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB (-${saved}%)`
        );
        totalAfter += sizeAfter;
        count++;
      } else {
        totalAfter += sizeBefore;
      }
    } catch (err) {
      console.error(`SKIP ${file}: ${err.message}`);
      totalAfter += sizeBefore;
    }
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Optimized: ${count} images`);
console.log(
  `Before: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → After: ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
);
console.log(
  `Saved: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)}MB (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`
);
