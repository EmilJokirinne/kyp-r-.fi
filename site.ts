/**
 * SEO- ja sivustoasetukset. Muokkaa tästä otsikkoa, kuvausta,
 * avainsanoja, verkko-osoitetta ja yhteystietoja.
 */
export const site = {
  name: "Kypärä.fi",
  logo: "KYPÄRÄ.FI",
  displayDomain: "kypärä.fi",
  // new URL muuntaa ääkköset automaattisesti punycode-muotoon.
  url: new URL("https://kypärä.fi").origin,
  seoTitle: "Kypärä.fi – Kypärät, standardit ja kypärän valinta",
  description:
    "Kypärä.fi auttaa valitsemaan oikean kypärän. Tutustu eri kypärätyyppeihin, standardeihin, ominaisuuksiin, kokoihin ja turvalliseen istuvuuteen.",
  tagline: "Tietoa kypäristä, turvallisuudesta, standardeista ja oikean kypärän valinnasta.",
  locale: "fi_FI",
  keywords: [
    "kypärä",
    "kypärät",
    "pyöräilykypärä",
    "moottoripyöräkypärä",
    "mopokypärä",
    "lasten kypärä",
    "laskettelukypärä",
    "lumilautakypärä",
    "kiipeilykypärä",
    "melontakypärä",
    "ratsastuskypärä",
    "työkypärä",
    "kypärän koko",
    "kypärän valinta",
    "kypärän standardit",
    "EN 1078",
    "EN 1077",
    "EN 12492",
    "EN 1385",
    "EN 1384",
    "EN 397",
    "ECE R22.06",
    "MIPS kypärä",
  ],
  // Lisää sähköpostiosoite ennen julkaisua. Tyhjänä yhteystietolohkossa
  // näytetään neutraali teksti eikä keksittyjä tietoja.
  contactEmail: "",
  year: 2026,
};
