/**
 * Generates all site iconography from public/logo.png
 * Run: node scripts/generate-icons.mjs
 *
 * Outputs:
 *   app/icon.png                  → Next.js favicon (auto-picked up)
 *   app/apple-icon.png            → Apple touch icon (auto-picked up)
 *   public/favicon.png            → Generic PNG favicon (Vercel, bots, etc.)
 *   public/favicon-16x16.png
 *   public/favicon-32x32.png
 *   public/favicon.ico            → Multi-size ICO (16 + 32 + 48)
 *   public/apple-touch-icon.png   → Explicit Apple touch icon fallback
 *   public/android-chrome-192x192.png
 *   public/android-chrome-512x512.png
 *   public/og-image.png           → Open Graph / social share (1200x630) — omitido si ya existe
 *   public/site.webmanifest
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public", "logo.png");

// Brand colors
const BG_DARK = { r: 13, g: 26, b: 16, alpha: 1 }; // #0d1a10
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

mkdirSync(join(ROOT, "app"), { recursive: true });

function log(path) {
  console.log("✓", path.replace(ROOT, "").replace(/\\/g, "/"));
}

/** Wraps one or more PNG buffers into a valid .ico file */
function buildIco(entries) {
  // entries: [{ size, buffer }]
  const count = entries.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dataOffset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = 1 (icon)
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const imageBuffers = [];
  let offset = dataOffset;

  for (const { size, buffer } of entries) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // colorCount
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bitCount
    entry.writeUInt32LE(buffer.length, 8); // bytesInRes
    entry.writeUInt32LE(offset, 12); // imageOffset
    dirEntries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function resizePng(size) {
  return sharp(SRC)
    .resize(size, size, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();
}

/** Genera un icono con fondo de color (para Apple, Android, favicon.png) */
async function withBg(size, padding, out) {
  const logoSize = Math.round(size * padding);
  const logoBuffer = await sharp(SRC)
    .resize(logoSize, logoSize, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  await sharp({ create: { width: size, height: size, channels: 4, background: BG_DARK } })
    .composite([{ input: logoBuffer, gravity: "center" }])
    .png()
    .toFile(out);
  log(out);
}

async function main() {
  // Iconos transparentes (el favicon.ico ya funciona así)
  const transparent = [
    { size: 16,  out: join(ROOT, "public", "favicon-16x16.png") },
    { size: 32,  out: join(ROOT, "public", "favicon-32x32.png") },
    { size: 32,  out: join(ROOT, "app",    "icon.png") },
  ];

  for (const { size, out } of transparent) {
    await sharp(SRC)
      .resize(size, size, { fit: "contain", background: TRANSPARENT })
      .png()
      .toFile(out);
    log(out);
  }

  // Iconos con fondo verde — se ven bien en cualquier fondo
  await withBg(32,  0.7, join(ROOT, "public", "favicon.png"));
  await withBg(180, 0.7, join(ROOT, "app",    "apple-icon.png"));
  await withBg(180, 0.7, join(ROOT, "public", "apple-touch-icon.png"));
  await withBg(192, 0.75, join(ROOT, "public", "android-chrome-192x192.png"));
  await withBg(512, 0.75, join(ROOT, "public", "android-chrome-512x512.png"));

  // favicon.ico — 16x16 + 32x32 + 48x48 embedded
  // Va en app/ (Next.js App Router lo registra automáticamente)
  // Y también en public/ como fallback estático
  const [buf16, buf32, buf48] = await Promise.all([resizePng(16), resizePng(32), resizePng(48)]);
  const icoData = buildIco([
    { size: 16, buffer: buf16 },
    { size: 32, buffer: buf32 },
    { size: 48, buffer: buf48 },
  ]);
  const icoAppPath = join(ROOT, "app", "favicon.ico");
  const icoPubPath = join(ROOT, "public", "favicon.ico");
  writeFileSync(icoAppPath, icoData);
  writeFileSync(icoPubPath, icoData);
  log(icoAppPath);
  log(icoPubPath);

  // OG image — se omite si ya existe (no sobreescribir imagen personalizada)
  const ogPath = join(ROOT, "public", "og-image.png");
  if (existsSync(ogPath)) {
    console.log("– /public/og-image.png (ya existe, se omite)");
  } else {
    const logoBuffer = await sharp(SRC)
      .resize(500, 500, { fit: "contain", background: TRANSPARENT })
      .png()
      .toBuffer();
    await sharp({ create: { width: 1200, height: 630, channels: 4, background: BG_DARK } })
      .composite([{ input: logoBuffer, gravity: "center" }])
      .png()
      .toFile(ogPath);
    log(ogPath);
  }

  // site.webmanifest
  const manifest = {
    name: "La Estación Barber Shop",
    short_name: "La Estación",
    description: "Barbería premium en Ciudad del Saber, Panamá.",
    start_url: "/",
    display: "standalone",
    theme_color: "#1a2e22",
    background_color: "#0d1a10",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };

  const manifestPath = join(ROOT, "public", "site.webmanifest");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  log(manifestPath);

  console.log("\nDone! All icons generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
