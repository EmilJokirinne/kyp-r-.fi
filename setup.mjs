/**
 * Kypärä.fi – projektin valmistelu.
 *
 * Projektin kaikki lähdetiedostot ovat juurikansiossa (tasainen rakenne).
 * Next.js vaatii kuitenkin reittitiedostot app/-kansioon ja staattiset
 * tiedostot public/-kansioon. Tämä skripti luo ne automaattisesti
 * ennen komentoja `npm run dev` ja `npm run build`.
 *
 * app/-kansion tiedostot ovat vain ohuita uudelleenvientejä – muokkaa
 * aina juurikansion tiedostoja (esim. RootLayout.tsx, HomePage.tsx).
 */
import { mkdirSync, writeFileSync, copyFileSync, readdirSync, existsSync } from "node:fs";

mkdirSync("app", { recursive: true });
mkdirSync("public", { recursive: true });

const imageRoute = `import OgImage, { alt as a, size as s, contentType as c } from "@/og-image";
export const alt = a;
export const size = s;
export const contentType = c;
export default OgImage;
`;

const wrappers = {
  "layout.tsx": `import RootLayout, { metadata as m, viewport as v } from "@/RootLayout";
export const metadata = m;
export const viewport = v;
export default RootLayout;
`,
  "page.tsx": `import HomePage from "@/HomePage";
export default HomePage;
`,
  "not-found.tsx": `import NotFound from "@/NotFound";
export default NotFound;
`,
  "robots.ts": `import robots from "@/seo-robots";
export default robots;
`,
  "sitemap.ts": `import sitemap from "@/seo-sitemap";
export default sitemap;
`,
  "opengraph-image.tsx": imageRoute,
  "twitter-image.tsx": imageRoute,
};

for (const [file, content] of Object.entries(wrappers)) {
  writeFileSync(`app/${file}`, `// Luotu automaattisesti (setup.mjs) – älä muokkaa.\n${content}`);
}

if (existsSync("icon.svg")) copyFileSync("icon.svg", "app/icon.svg");

// Kuvat: kaikki juurikansion kuvatiedostot kopioidaan public/-kansioon,
// jolloin niihin viitataan esim. polulla "/pyorailykypara.webp".
const imageExt = /\.(jpe?g|png|webp|avif|gif)$/i;
let images = 0;
for (const file of readdirSync(".")) {
  if (imageExt.test(file)) {
    copyFileSync(file, `public/${file}`);
    images++;
  }
}

console.log(`[kypara.fi] app/ ja public/ valmisteltu (${images} kuvatiedostoa).`);
