# Kypärä.fi

Suomenkielinen tietosivusto kypäristä, standardeista ja kypärän valinnasta.
Next.js (App Router) · React · TypeScript · Tailwind CSS v4.

## Käynnistys

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Kaikki tiedostot ovat juurikansiossa. `setup.mjs` luo automaattisesti Next.js:n
tarvitsemat `app/`- ja `public/`-kansiot ennen `dev`- ja `build`-komentoja
(ohuet uudelleenviennit). Muokkaa aina juurikansion tiedostoja.

## Mitä muokataan missä

| Asia | Tiedosto |
| --- | --- |
| Kaikki sivun tekstit, standardit, taulukot, UKK | `content.ts` |
| SEO-otsikko, kuvaus, avainsanat, domain, yhteystiedot | `site.ts` |
| Metatiedot (OG, X, canonical) | `RootLayout.tsx` |
| Rakenteinen data (WebSite, Organization, FAQPage) | `HomePage.tsx` |
| robots.txt / sitemap.xml | `seo-robots.ts` / `seo-sitemap.ts` |
| Jakokuva (OG/X) | `og-image.tsx` |
| Värit, fontit, animaatiot | `globals.css` |
| Kypäräkuvitukset | `HelmetArt.tsx` |

## Kuvat

Sivulla on piirretyt SVG-kypäräkuvitukset. Valokuvan saa käyttöön lisäämällä
kuvatiedoston (esim. `pyorailykypara.webp`) juurikansioon ja asettamalla
`content.ts`-tiedostossa kyseiselle kypäräluokalle
`image: "/pyorailykypara.webp"` ja `imageAlt: "…"`. Kuva näytetään Next/Imagella
(AVIF/WebP, lazy loading, responsiiviset koot).

## Ennen julkaisua

- Lisää yhteystieto `site.ts`-tiedoston kenttään `contactEmail`.
- Tarkista lakisisältö (UKK "Onko kypärä aina pakollinen?") Traficomin ajantasaisesta ohjeistuksesta.
