/**
 * Kypärä.fi – kaikki sivun sisältö yhdessä paikassa.
 *
 * Tekstejä, standardeja, taulukoita ja UKK-vastauksia muokataan tässä
 * tiedostossa. Komponentit lukevat sisällön täältä.
 *
 * Kuvat: jokaisella kypäräluokalla on `art` (piirretty kuvitus). Jos
 * haluat käyttää valokuvaa, lisää kuvatiedosto projektin juureen ja
 * aseta kenttä `image`, esim. image: "/pyorailykypara.webp".
 *
 * Tärkeää: älä lisää sisältöön turvallisuuslupauksia ("takaa suojan",
 * "turvallisin" jne.), keksittyjä arvosteluja, hintoja tai sertifikaatteja.
 */

export type HelmetKind =
  | "bike"
  | "moto"
  | "jet"
  | "modular"
  | "offroad"
  | "ski"
  | "climb"
  | "kayak"
  | "riding"
  | "work"
  | "kids";

/* ------------------------------------------------------------------ */
/* Navigaatio                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Kypärät", href: "#kyparat" },
  { label: "Käyttötarkoitukset", href: "#kayttotarkoitukset" },
  { label: "Standardit", href: "#standardit" },
  { label: "Koko-opas", href: "#koko-opas" },
  { label: "Tietoa kypäristä", href: "#tekniset-tiedot" },
  { label: "UKK", href: "#ukk" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Suomenkielinen tietopalvelu kypäristä",
  // ­ = pehmeä tavuviiva, jotta pitkä sana tavuttuu siististi mobiilissa.
  title: "Oikea kypärä alkaa oikeasta käyttö­tarkoituksesta.",
  lead: "Kypärä.fi auttaa ymmärtämään eri kypärätyyppejä, turvallisuusstandardeja, ominaisuuksia ja istuvuutta – jotta osaat valita kypärän käyttötarkoituksesi mukaan.",
  primaryCta: { label: "Tutustu kypärätyyppeihin", href: "#kyparat" },
  secondaryCta: { label: "Katso koko-opas", href: "#koko-opas" },
  trust: [
    "Eri käyttötarkoitukset",
    "Standardit selkokielellä",
    "Koko- ja istuvuusopas",
    "Suomessa suunnattu sisältö",
  ],
  tiles: [
    { kind: "moto" as HelmetKind, label: "Moottoripyöräily", code: "ECE R22.06" },
    { kind: "bike" as HelmetKind, label: "Pyöräily", code: "EN 1078" },
    { kind: "ski" as HelmetKind, label: "Laskettelu", code: "EN 1077" },
    { kind: "climb" as HelmetKind, label: "Kiipeily", code: "EN 12492" },
    { kind: "work" as HelmetKind, label: "Teollisuus", code: "EN 397" },
  ],
};

/* ------------------------------------------------------------------ */
/* Pikavastaukset (30 sekunnin kysymykset)                             */
/* ------------------------------------------------------------------ */

export const quickAnswers = [
  {
    q: "Millainen kypärä minun pitäisi valita?",
    a: "Käyttötarkoitukseen suunniteltu kypärä. Pyöräilykypärä ei korvaa moottoripyöräkypärää, eikä teollisuuskypärä laskettelukypärää.",
    href: "#kayttotarkoitukset",
    link: "Valitse käyttötarkoitus",
  },
  {
    q: "Mikä standardi koskee käyttötarkoitustani?",
    a: "Esimerkiksi pyöräily EN 1078, laskettelu EN 1077, kiipeily EN 12492 ja moottoripyöräily ECE R22.06.",
    href: "#vertailu",
    link: "Katso vertailutaulukko",
  },
  {
    q: "Mitä ominaisuuksia kannattaa tarkistaa?",
    a: "Hyväksyntä, istuvuus, kiinnitys, paino ja ilmanvaihto – ja lajista riippuen visiiri tai yhteensopivuus suojalasien kanssa.",
    href: "#tekniset-tiedot",
    link: "Tekniset tiedot selitettynä",
  },
  {
    q: "Miten löydän oikean koon?",
    a: "Mittaa pään suurin ympärys noin kulmakarvojen yläpuolelta ja vertaa valmistajan kokotaulukkoon.",
    href: "#koko-opas",
    link: "Avaa koko-opas",
  },
  {
    q: "Mistä tiedän, että kypärä istuu oikein?",
    a: "Kypärä istuu napakasti ilman kipua, ei heilu eikä valu, ja hihna pysyy säädettynä.",
    href: "#istuvuus",
    link: "Tee istuvuustesti",
  },
];

/* ------------------------------------------------------------------ */
/* Käyttötarkoitukset                                                  */
/* ------------------------------------------------------------------ */

export type UseCase = {
  id: string;
  title: string;
  art: HelmetKind;
  description: string;
  standards: string[];
  standardHref: string;
  specs: string[];
  note?: string;
  law?: string;
};

export const useCases: UseCase[] = [
  {
    id: "pyoraily",
    title: "Pyöräily",
    art: "bike",
    description:
      "Kevyt ja hyvin tuulettuva kypärä arkeen, työmatkoille, maantieajoon ja maastoon.",
    standards: ["EN 1078"],
    standardHref: "#std-en-1078",
    specs: [
      "Paino",
      "Ilmanvaihto",
      "Säätöjärjestelmä",
      "Istuvuus",
      "Näkyvyys",
      "Mahdollinen MIPS-tyyppinen lisäsuojaus",
    ],
    law: "Tieliikennelain mukaan pyöräilijän tulee ajon aikana yleensä käyttää suojakypärää. Käyttämättä jättämisestä ei seuraa rangaistusta.",
  },
  {
    id: "moottoripyoraily",
    title: "Moottoripyöräily",
    art: "moto",
    description:
      "Moottoripyöräilyssä kypärän rakenne, istuvuus, visiiri ja hyväksyntä ovat keskeisiä ominaisuuksia.",
    standards: ["ECE R22.06"],
    standardHref: "#std-ece-r22-06",
    specs: [
      "Hyväksyntä",
      "Kuorirakenne",
      "Paino",
      "Visiiri",
      "Leukasuoja",
      "Ilmanvaihto",
      "Melutaso",
      "Kiinnitysjärjestelmä",
    ],
    note: "Tarkista aina kypärän ajantasainen hyväksyntä ja käyttötarkoitus ennen käyttöä.",
    law: "Tyyppihyväksytyn suojakypärän käyttö on lakisääteinen vaatimus kuljettajalle ja matkustajalle.",
  },
  {
    id: "mopoilu",
    title: "Mopoilu",
    art: "jet",
    description:
      "Mopokäyttöön tarkoitetun kypärän tulee soveltua tieliikennekäyttöön ja täyttää sille asetetut vaatimukset.",
    standards: ["ECE R22 -tyyppihyväksyntä"],
    standardHref: "#std-ece-r22-06",
    specs: ["Hyväksyntä", "Istuvuus", "Näkyvyys", "Visiiri", "Kiinnitys", "Ilmanvaihto"],
    note: "Pyöräilykypärä ei sovellu mopoiluun, vaikka mopon nopeus olisi pieni.",
    law: "Tyyppihyväksytyn suojakypärän käyttö on lakisääteinen vaatimus mopon kuljettajalle ja matkustajalle.",
  },
  {
    id: "laskettelu",
    title: "Hiihto ja lumilautailu",
    art: "ski",
    description:
      "Rinteessä kypärältä odotetaan iskusuojausta, lämpöä ja toimivaa yhteispeliä suojalasien kanssa.",
    standards: ["EN 1077"],
    standardHref: "#std-en-1077",
    specs: [
      "Iskusuojaus",
      "Istuvuus",
      "Ilmanvaihto",
      "Paino",
      "Korvasuojat",
      "Suojalasien yhteensopivuus",
    ],
  },
  {
    id: "kiipeily",
    title: "Kiipeily ja vuorikiipeily",
    art: "climb",
    description:
      "Kiipeilykypärä suojaa ylhäältä putoavilta kiviltä ja kaatumistilanteiden iskuilta, ja sen tulee pysyä tukevasti päässä.",
    standards: ["EN 12492"],
    standardHref: "#std-en-12492",
    specs: [
      "Paino",
      "Istuvuus",
      "Ilmanvaihto",
      "Leukahihna",
      "Yhteensopivuus muun varustuksen kanssa",
    ],
  },
  {
    id: "melonta",
    title: "Melonta",
    art: "kayak",
    description:
      "Melontakypärän tulee kestää vettä, kuivua nopeasti ja pysyä paikallaan myös virtaavassa vedessä.",
    standards: ["EN 1385"],
    standardHref: "#std-en-1385",
    specs: ["Iskusuojaus", "Istuvuus", "Kiinnitys", "Peittävyys", "Kuivuminen", "Materiaalit"],
  },
  {
    id: "ratsastus",
    title: "Ratsastus",
    art: "riding",
    description:
      "Ratsastuskypärä on suunniteltu putoamistilanteisiin, ja sen istuvuus ja leukahihna ovat erityisen tärkeitä.",
    standards: ["EN 1384"],
    standardHref: "#std-en-1384",
    specs: ["Istuvuus", "Leukahihna", "Iskusuojaus", "Ilmanvaihto", "Paino"],
    note: "Kilpailujen järjestäjät voivat edellyttää tiettyä standardia – tarkista ajantasaiset säännöt.",
  },
  {
    id: "tyo",
    title: "Työ ja teollisuus",
    art: "work",
    description:
      "Työkypärä valitaan työn riskien mukaan: putoavat esineet, iskut, olosuhteet ja muut käytettävät suojaimet.",
    standards: ["EN 397", "EN 14052"],
    standardHref: "#std-en-397",
    specs: [
      "Iskusuojaus",
      "Leukahihna",
      "Säätö",
      "Yhteensopivuus muiden henkilönsuojainten kanssa",
      "Käyttöolosuhteet",
    ],
    law: "Työpaikalla päänsuojaimen tarpeen määrittää työnantajan riskinarviointi.",
  },
];

/* ------------------------------------------------------------------ */
/* Kypäräluokat                                                        */
/* ------------------------------------------------------------------ */

export type HelmetCategory = {
  name: string;
  art: HelmetKind;
  image?: string;
  imageAlt?: string;
  use: string;
  standard: string;
  traits: string[];
  href: string;
};

export const helmetCategories: HelmetCategory[] = [
  {
    name: "Pyöräilykypärä",
    art: "bike",
    use: "Arki- ja työmatkapyöräily, maantie- ja maastopyöräily.",
    standard: "EN 1078",
    traits: ["Kevyt EPS-rakenne", "Runsas ilmanvaihto", "Säädettävä takasäätö"],
    href: "#std-en-1078",
  },
  {
    name: "Moottoripyöräkypärä",
    art: "moto",
    use: "Moottoripyöräily tieliikenteessä ja radalla.",
    standard: "ECE R22.06",
    traits: ["Kova ulkokuori", "Leukasuoja ja visiiri", "Tyyppihyväksyntä"],
    href: "#moottoripyorakypara",
  },
  {
    name: "Mopokypärä",
    art: "jet",
    use: "Mopot ja muut kevyet moottoriajoneuvot tieliikenteessä.",
    standard: "ECE R22 -hyväksyntä",
    traits: ["Tieliikennekäyttöön hyväksytty", "Visiiri tai lasit", "Hyvä näkyvyys"],
    href: "#std-ece-r22-06",
  },
  {
    name: "Laskettelu- ja lumi­lautakypärä",
    art: "ski",
    use: "Laskettelu, lumilautailu ja muut rinnelajit.",
    standard: "EN 1077",
    traits: ["Irrotettavat korvasuojat", "Säädettävä tuuletus", "Suojalasikiinnike"],
    href: "#std-en-1077",
  },
  {
    name: "Kiipeilykypärä",
    art: "climb",
    use: "Kallio- ja vuorikiipeily, via ferrata.",
    standard: "EN 12492",
    traits: ["Kevyt rakenne", "Tukeva leukahihna", "Otsalampun kiinnikkeet"],
    href: "#std-en-12492",
  },
  {
    name: "Melontakypärä",
    art: "kayak",
    use: "Melonta, koskimelonta ja muut vesilajit.",
    standard: "EN 1385",
    traits: ["Vettä kestävät materiaalit", "Vedenpoistoaukot", "Peittävä muotoilu"],
    href: "#std-en-1385",
  },
  {
    name: "Ratsastuskypärä",
    art: "riding",
    use: "Ratsastus ja tallityöskentely hevosten parissa.",
    standard: "EN 1384",
    traits: ["Lippa edessä", "Kolmipistehihna", "Tarkka koonsäätö"],
    href: "#std-en-1384",
  },
  {
    name: "Teollisuuskypärä",
    art: "work",
    use: "Työmaat, teollisuus ja muut työympäristöt.",
    standard: "EN 397 / EN 14052",
    traits: ["Suojaa putoavilta esineiltä", "Säädettävä sisäosa", "Lisävarusteiden kiinnitys"],
    href: "#std-en-397",
  },
  {
    name: "Lasten kypärä",
    art: "kids",
    use: "Lasten pyöräily ja muut lajit – valitaan lajin mukaan.",
    standard: "Lajin mukaan, esim. EN 1078",
    traits: ["Oikea koko ilman kasvuvaraa", "Helppo säätö", "Näkyvä väri tai heijastin"],
    href: "#ukk-lasten-kypara",
  },
];

/* ------------------------------------------------------------------ */
/* Vertailutaulukko                                                    */
/* ------------------------------------------------------------------ */

export const comparisonRows = [
  {
    type: "Pyöräily",
    use: "Pyöräily ja kevyt sähköinen liikkuminen",
    standard: "EN 1078",
    features: "Kevyt rakenne, ilmanvaihto, istuvuus",
  },
  {
    type: "Moottoripyörä",
    use: "Moottoripyöräily",
    standard: "ECE R22.06",
    features: "Kuori, leukasuoja, visiiri, kiinnitys",
  },
  {
    type: "Laskettelu",
    use: "Hiihto ja lumilautailu",
    standard: "EN 1077",
    features: "Iskusuojaus, istuvuus, ilmanvaihto",
  },
  {
    type: "Kiipeily",
    use: "Kiipeily ja vuorikiipeily",
    standard: "EN 12492",
    features: "Kevyt rakenne, kiinnitys, istuvuus",
  },
  {
    type: "Melonta",
    use: "Melonta ja koskimelonta",
    standard: "EN 1385",
    features: "Iskusuojaus, peittävyys, kiinnitys",
  },
  {
    type: "Ratsastus",
    use: "Ratsastus",
    standard: "EN 1384",
    features: "Iskusuojaus, istuvuus, leukahihna",
  },
  {
    type: "Teollisuus",
    use: "Työmaat ja teollisuus",
    standard: "EN 397",
    features: "Iskusuojaus, säätö, lisävarusteet",
  },
];

/* ------------------------------------------------------------------ */
/* Tiedon lähteet: laki, suositus, standardi…                          */
/* ------------------------------------------------------------------ */

export const infoSources = [
  {
    title: "Lakisääteinen vaatimus",
    text: "Esimerkiksi tieliikennelaki velvoittaa käyttämään tyyppihyväksyttyä kypärää moottoripyörällä, mopolla ja moottorikelkalla.",
  },
  {
    title: "Viranomaisohje ja suositus",
    text: "Esimerkiksi Traficomin ja Työterveyslaitoksen ohjeet. Suositus ei ole lakisääteinen velvoite.",
  },
  {
    title: "Eurooppalainen standardi",
    text: "Määrittää, mitä vaatimuksia tietyn käyttötarkoituksen kypärän tulee täyttää ja miten se testataan.",
  },
  {
    title: "Valmistajan ohjeet",
    text: "Kertovat kypärän käyttötarkoituksen, koot, huollon ja suositellun käyttöiän. Noudata niitä aina.",
  },
  {
    title: "Yleinen neuvo",
    text: "Kypärä.fi:n sisältö on yleistä tietoa. Se ei korvaa valmistajan ohjeita eikä viranomaisohjeita.",
  },
];

/* ------------------------------------------------------------------ */
/* Standardit                                                          */
/* ------------------------------------------------------------------ */

export type Standard = {
  id: string;
  code: string;
  title: string;
  covers: string;
  where: string;
  check: string[];
};

export const standards: Standard[] = [
  {
    id: "std-en-1078",
    code: "EN 1078",
    title: "Pyöräily, rullaluistelu ja rullalautailu",
    covers:
      "Pyöräilijöiden sekä rullalauta- ja rullaluistinkäyttäjien kypärien vaatimukset, kuten iskunvaimennus ja kiinnitysjärjestelmän toiminta.",
    where: "Arki- ja urheilupyöräily, rullalautailu ja rullaluistelu.",
    check: [
      "CE-merkintä ja standardimerkintä kypärän sisällä",
      "Koko ja valmistuspäivä",
      "Soveltuuko kypärä juuri sinun ajotapaasi ja nopeuksiisi",
    ],
  },
  {
    id: "std-ece-r22-06",
    code: "ECE R22.06",
    title: "Moottoripyörä- ja mopokypärät",
    covers:
      "YK:n Euroopan talouskomission sääntö, jonka mukaan moottoripyöräkypärät tyyppihyväksytään. R22.06 on säännön nykyinen versio, joka on korvannut aiemman R22.05:n uusissa kypärissä.",
    where: "Moottoripyörät, mopot ja muut ajoneuvot, joissa laki edellyttää tyyppihyväksyttyä kypärää.",
    check: [
      "Hyväksyntätarra, yleensä leukahihnassa",
      "Merkintä P (leukasuoja), J (avokypärä) tai P/J (modulaari)",
      "Että visiiri ja lisävarusteet ovat kypärään hyväksyttyjä",
    ],
  },
  {
    id: "std-en-1077",
    code: "EN 1077",
    title: "Laskettelu ja lumilautailu",
    covers:
      "Alppihiihdon ja lumilautailun kypärät. Standardissa on luokat A ja B, jotka eroavat muun muassa pään peittävyyden osalta.",
    where: "Laskettelurinteet, lumilautailu ja muut rinnelajit.",
    check: [
      "Luokka A tai B ja sen merkitys käytössäsi",
      "Istuvuus yhdessä suojalasien kanssa",
      "Korvasuojien ja tuuletuksen säätö",
    ],
  },
  {
    id: "std-en-12492",
    code: "EN 12492",
    title: "Vuorikiipeily ja kiipeily",
    covers:
      "Vuorikiipeilijöiden kypärät: iskunvaimennus ylhäältä ja sivuilta sekä kiinnitysjärjestelmän lujuus, jotta kypärä pysyy päässä.",
    where: "Kallio- ja vuorikiipeily, via ferrata ja osa korkealla tehtävästä työstä.",
    check: [
      "Leukahihnan ja säätöjärjestelmän toiminta",
      "Otsalampun ja muiden varusteiden kiinnikkeet",
      "Kypärän rakenne: EPS, hybridi vai kova kuori",
    ],
  },
  {
    id: "std-en-1385",
    code: "EN 1385",
    title: "Melonta",
    covers:
      "Melonta- ja koskiurheilukypärät. Standardi ottaa huomioon vesiympäristön ja lajille tyypilliset iskutilanteet.",
    where: "Melonta, koskimelonta ja muut virtaavan veden lajit.",
    check: [
      "Peittävyys ohimoilla ja takaraivossa",
      "Kiinnityksen toimivuus märkänä",
      "Materiaalien kuivuminen ja vedenpoisto",
    ],
  },
  {
    id: "std-en-1384",
    code: "EN 1384",
    title: "Ratsastus",
    covers:
      "Ratsastuskypärien vaatimukset putoamis- ja iskutilanteita varten sekä leukahihnan ja kiinnityksen toiminta.",
    where: "Ratsastus, tallityöskentely ja hevosten käsittely.",
    check: [
      "Kilpailusääntöjen mahdolliset standardivaatimukset",
      "Kolmipistehihnan säätö",
      "Istuvuus ilman painekohtia",
    ],
  },
  {
    id: "std-en-397",
    code: "EN 397",
    title: "Teollisuuskypärät",
    covers:
      "Teollisuuden suojakypärät, jotka on suunniteltu suojaamaan erityisesti ylhäältä putoavilta esineiltä. Lisäominaisuudet, kuten kylmänkesto tai sähköeristys, merkitään erikseen.",
    where: "Rakennustyömaat, teollisuus ja muut työt, joissa päähän voi kohdistua putoavien esineiden iskuja.",
    check: [
      "Lisävaatimusten merkinnät kypärässä",
      "Yhteensopivuus kuulonsuojainten ja visiirien kanssa",
      "Valmistuspäivä ja valmistajan ilmoittama käyttöikä",
    ],
  },
  {
    id: "std-en-14052",
    code: "EN 14052",
    title: "Korkean suojaustason teollisuuskypärät",
    covers:
      "Vaativiin työtehtäviin tarkoitetut teollisuuskypärät, joilta edellytetään suojaa myös edestä, takaa ja sivuilta tulevia iskuja vastaan.",
    where: "Työt, joissa riskinarviointi edellyttää laajempaa iskusuojausta kuin EN 397.",
    check: [
      "Vastaako suojaustaso riskinarviointia",
      "Leukahihnan tyyppi ja avautumisominaisuus",
      "Yhteensopivuus muiden henkilönsuojainten kanssa",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Moottoripyöräkypärät                                                */
/* ------------------------------------------------------------------ */

export const motoStyles = [
  {
    name: "Kokokypärä",
    art: "moto" as HelmetKind,
    text: "Peittää koko pään, ja leukasuoja on osa kuorta. Tyypillinen valinta maantie- ja ratakäyttöön.",
    mark: "Merkintä P",
  },
  {
    name: "Avokypärä",
    art: "jet" as HelmetKind,
    text: "Avoin rakenne ilman leukasuojaa. Kevyempi ja ilmavampi, mutta peittää vähemmän.",
    mark: "Merkintä J",
  },
  {
    name: "Modulaarikypärä",
    art: "modular" as HelmetKind,
    text: "Leukaosa voidaan nostaa ylös. Käyttö avoimena on sallittua vain, jos kypärä on hyväksytty myös siihen.",
    mark: "Merkintä P/J",
  },
  {
    name: "Off-road / motocross",
    art: "offroad" as HelmetKind,
    text: "Suunniteltu maastoajoon: pitkä leukaosa ja lippa. Käytetään yleensä erillisten ajolasien kanssa.",
    mark: "Maastokäyttöön",
  },
];

export const motoFactors = [
  { name: "Kuorimateriaali", text: "Kuori jakaa iskun voimaa. Materiaali vaikuttaa painoon ja hintaan – ei yksinään suojaavuuteen." },
  { name: "Iskunvaimennus", text: "Kuoren alla oleva EPS-kerros vaimentaa iskua muuttamalla muotoaan." },
  { name: "Visiiri", text: "Optinen laatu, huurtumisenesto ja naarmusuojaus. Tummennettu visiiri vain valoisaan aikaan." },
  { name: "Ilmanvaihto", text: "Vähentää huurtumista ja kuumuutta. Säädettävät aukot auttavat eri keleissä." },
  { name: "Leukahihna", text: "D-rengas tai valmistajan pikalukko. Hihnan tulee olla aina kiinni ja kireällä." },
  { name: "Paino", text: "Kevyempi kypärä voi väsyttää niskaa vähemmän pitkillä matkoilla." },
  { name: "Melu", text: "Tuulen kohina voi olla voimakasta. Kuulonsuojaus voi olla tarpeen pitkillä ajoilla." },
  { name: "Istuvuus", text: "Poskipehmusteiden tulee tuntua napakoilta. Kypärä ei saa kääntyä päässä." },
];

/* ------------------------------------------------------------------ */
/* Tekniset tiedot                                                     */
/* ------------------------------------------------------------------ */

export type Spec = {
  id: string;
  title: string;
  summary: string;
  body: string;
  bullets?: { term: string; text: string }[];
};

export const specs: Spec[] = [
  {
    id: "paino",
    title: "Paino",
    summary: "Keveys lisää mukavuutta, mutta paino ei yksin kerro suojaavuudesta.",
    body: "Kevyt kypärä voi tuntua mukavammalta erityisesti pitkissä suorituksissa. Kypärän suojaavuus riippuu kuitenkin rakenteesta, käyttötarkoituksesta ja istuvuudesta – ei pelkästä painosta.",
  },
  {
    id: "kuori",
    title: "Kuorimateriaali",
    summary: "Kuori jakaa iskun voimaa laajemmalle alueelle.",
    body: "Materiaalin valinta vaikuttaa painoon, hintaan ja kestävyyteen. Mikään materiaali ei ole kaikissa tilanteissa muita turvallisempi.",
    bullets: [
      { term: "Polykarbonaatti", text: "Yleinen, kevyt muovi esimerkiksi pyöräilykypärissä." },
      { term: "ABS", text: "Kestävä ja edullinen muovi, yleinen moottoripyörä- ja työkypärissä." },
      { term: "Lasikuitu", text: "Komposiitti, jota käytetään erityisesti moottoripyöräkypärissä." },
      { term: "Hiilikuitu", text: "Kevyt komposiitti. Keveys ei yksin tarkoita parempaa suojaa." },
      { term: "EPS", text: "Ei kuorimateriaali vaan iskua vaimentava sisäkerros." },
    ],
  },
  {
    id: "eps",
    title: "EPS",
    summary: "Paisutettu polystyreeni vaimentaa iskun energiaa.",
    body: "EPS (expanded polystyrene) on yleisesti käytetty iskua vaimentava sisäkerros. Se muuttaa muotoaan iskussa, minkä vuoksi voimakkaan iskun saanut kypärä kannattaa vaihtaa, vaikka vaurio ei näkyisi päältä.",
  },
  {
    id: "ilmanvaihto",
    title: "Ilmanvaihto",
    summary: "Vaikuttaa mukavuuteen, lämpötilaan ja huurtumiseen.",
    body: "Tuuletusaukot ja sisäiset ilmakanavat poistavat lämpöä ja kosteutta. Talvilajeissa ja moottoripyöräilyssä säädettävä tuuletus auttaa sovittamaan kypärän kelin mukaan.",
  },
  {
    id: "istuvuus",
    title: "Istuvuus",
    summary: "Napakka ote ilman voimakkaita painekohtia.",
    body: "Kypärän tulee pysyä paikallaan päätä liikutettaessa, eikä se saa painaa epämukavasti yhteen kohtaan. Hyvin istuva kypärä on myös miellyttävämpi käyttää, jolloin sitä käytetään todennäköisemmin.",
  },
  {
    id: "kiinnitys",
    title: "Kiinnitys",
    summary: "Pitää kypärän päässä myös äkillisissä tilanteissa.",
    body: "Kiinnitysjärjestelmä vaihtelee lajin mukaan. Tärkeintä on, että hihna on aina kiinni ja oikein säädetty.",
    bullets: [
      { term: "Pikalukko", text: "Nopea käyttää, yleinen pyöräily- ja laskettelukypärissä." },
      { term: "D-rengas", text: "Kaksi metallirengasta, yleinen moottoripyöräkypärissä." },
      { term: "Mikrosäätölukko", text: "Valmistajakohtaisia järjestelmiä, joissa hihnaa säädetään portaittain." },
    ],
  },
  {
    id: "visiiri",
    title: "Visiiri",
    summary: "Suojaa silmiä ja kasvoja tuulelta, sateelta ja roskilta.",
    body: "Visiirin laatu vaikuttaa suoraan näkemiseen. Käytä vain kypärään hyväksyttyjä visiirejä.",
    bullets: [
      { term: "Kirkas", text: "Soveltuu kaikkiin valaistusolosuhteisiin." },
      { term: "Tummennettu", text: "Vain valoisaan aikaan – ei pimeällä tai hämärässä." },
      { term: "Huurtumaton", text: "Pinnoite tai erillinen sisävisiiri vähentää huurtumista." },
      { term: "Naarmusuojattu", text: "Kestävämpi pinta säilyttää näkyvyyden pidempään." },
      { term: "Optinen laatu", text: "Hyvä visiiri ei vääristä kuvaa eikä väsytä silmiä." },
    ],
  },
  {
    id: "mips",
    title: "MIPS ja kiertoliikkeen vaimennus",
    summary: "Järjestelmät, joilla pyritään vähentämään päähän välittyvää kiertoliikettä.",
    body: "Joissakin kypärissä käytetään järjestelmiä, joiden tarkoituksena on vähentää tietynlaisissa iskuissa päähän välittyvää kiertoliikettä. MIPS on näistä tunnetuin, mutta vastaavia ratkaisuja on useilla valmistajilla. Järjestelmä ei yksinään tee kypärästä kaikissa tilanteissa turvallisempaa – käyttötarkoitus, hyväksyntä ja istuvuus ratkaisevat edelleen.",
  },
];

/* ------------------------------------------------------------------ */
/* Valinnan vaiheet                                                    */
/* ------------------------------------------------------------------ */

export const chooseSteps = [
  {
    title: "Määritä käyttötarkoitus",
    text: "Valitse kypärä sen mukaan, mihin lajiin tai toimintaan sitä käytät.",
  },
  {
    title: "Tarkista standardi tai hyväksyntä",
    text: "Varmista, että kypärä on tarkoitettu kyseiseen käyttöön.",
  },
  {
    title: "Mittaa pään ympärys",
    text: "Kierrä mittanauha pään ympäri hieman kulmakarvojen yläpuolelta ja korvien yläpuolelta. Mittaa pään suurin ympärys.",
  },
  {
    title: "Sovita kypärä",
    text: "Sovita kypärä hihna kiinnitettynä ja liikuta päätä.",
    bullets: [
      "Kypärä ei saa heilua",
      "Se ei saa painaa epämukavasti",
      "Hihnan tulee pysyä paikallaan",
      "Kypärä ei saa liikkua helposti eteen, taakse tai sivuille",
    ],
  },
  {
    title: "Tarkista valmistajan kokotaulukko",
    text: "Senttimetrit eivät yksin ratkaise sopivuutta. Eri valmistajien kuorimuodot voivat poiketa toisistaan.",
  },
];

/* ------------------------------------------------------------------ */
/* Kokotaulukko (esimerkki – ei yleispätevä)                           */
/* ------------------------------------------------------------------ */

export const sizeTable = [
  { min: 48, max: 52, size: "XS" },
  { min: 52, max: 56, size: "S" },
  { min: 56, max: 59, size: "M" },
  { min: 59, max: 62, size: "L" },
  { min: 62, max: 64, size: "XL" },
];

export const sizeNote =
  "Koot vaihtelevat valmistajan ja mallin mukaan. Tarkista aina kyseisen kypärän valmistajan kokotaulukko.";

/* ------------------------------------------------------------------ */
/* Istuvuustesti                                                       */
/* ------------------------------------------------------------------ */

export const fitChecklist = [
  "Kypärä istuu napakasti mutta ei aiheuta kipua.",
  "Kypärä ei pääse heilumaan helposti sivusuunnassa.",
  "Kypärä pysyy oikealla paikallaan liikuttaessa.",
  "Leukahihna voidaan säätää kunnolla.",
  "Näkökenttä säilyy hyvänä.",
  "Kypärä ei paina epämukavasti yhtä kohtaa.",
];

/* ------------------------------------------------------------------ */
/* Kypärän vaihtaminen                                                 */
/* ------------------------------------------------------------------ */

export const replaceReasons = [
  {
    title: "Kypärä on saanut voimakkaan iskun",
    text: "Vaihda kypärä uuteen, vaikka ulkoisia vaurioita ei näkyisi.",
  },
  {
    title: "Kypärässä on halkeamia tai muita vaurioita",
    text: "Älä käytä vaurioitunutta kypärää.",
  },
  {
    title: "Sisäosat ovat kuluneet",
    text: "Myös pehmusteet ja muut sisäosat vaikuttavat istuvuuteen.",
  },
  {
    title: "Valmistajan ilmoittama käyttöikä on täyttynyt",
    text: "Noudata aina valmistajan ohjeita ja suositeltua käyttöikää.",
  },
];

/* ------------------------------------------------------------------ */
/* Yleiset virheet                                                     */
/* ------------------------------------------------------------------ */

export const mistakes = [
  { title: "Väärä käyttötarkoitus", text: "Eri lajien kypärät on suunniteltu erilaisiin iskuihin. Yksi kypärä ei sovi kaikkeen." },
  { title: "Väärä koko", text: "Liian suuri kypärä liikkuu, liian pieni painaa ja jää usein käyttämättä." },
  { title: "Liian löysä istuvuus", text: "Kypärän tulee pysyä paikallaan, kun ravistat päätä." },
  { title: "Hihnan väärä säätö", text: "Löysä hihna voi päästää kypärän liikkumaan. Hihnan alle mahtuu yleensä noin sormen verran." },
  { title: "Standardin tarkistamatta jättäminen", text: "Merkinnät kypärän sisällä kertovat, mihin käyttöön kypärä on tarkoitettu." },
  { title: "Vaurioituneen kypärän käyttäminen", text: "Halkeama tai kova isku voi heikentää suojauskykyä, vaikka vaurio ei näkyisi." },
  { title: "Pelkän ulkonäön perusteella valitseminen", text: "Ulkonäkö ratkaiskoon vasta, kun käyttötarkoitus, hyväksyntä ja istuvuus ovat kunnossa." },
];

/* ------------------------------------------------------------------ */
/* UKK                                                                 */
/* ------------------------------------------------------------------ */

export type Faq = { id: string; q: string; a: string[] };

export const faqs: Faq[] = [
  {
    id: "ukk-pakollinen",
    q: "Onko kypärä aina pakollinen?",
    a: [
      "Ei aina – se riippuu toiminnasta. Suomen tieliikennelain mukaan moottoripyörällä, mopolla ja moottorikelkalla ajettaessa kuljettajan ja matkustajan on pääsääntöisesti käytettävä tyyppihyväksyttyä suojakypärää. Sama koskee esimerkiksi korittomia kolmi- ja nelipyöriä. Kuljettaja vastaa siitä, että kyydissä oleva alle 15-vuotias käyttää kypärää.",
      "Pyöräilijän tulee lain mukaan ajon aikana yleensä käyttää suojakypärää, mutta käyttämättä jättämisestä ei seuraa rangaistusta.",
      "Laskettelussa, kiipeilyssä, melonnassa ja ratsastuksessa kypärä on yleensä suositus, mutta esimerkiksi rinteen, kilpailun, seuran tai tallin säännöt voivat edellyttää sitä. Työpaikalla päänsuojaimen käytöstä päätetään riskinarvioinnin perusteella.",
      "Tarkista ajantasaiset liikennesäännöt Traficomin sivuilta.",
    ],
  },
  {
    id: "ukk-tiukkuus",
    q: "Kuinka tiukasti kypärän pitää istua?",
    a: [
      "Kypärän tulee istua napakasti niin, ettei se liiku päätä ravistettaessa, mutta se ei saa aiheuttaa kipua tai voimakkaita painekohtia. Leukahihnan tulee olla kiinni ja säädetty niin, ettei kypärä pääse valumaan eteen tai taakse.",
    ],
  },
  {
    id: "ukk-eri-lajit",
    q: "Voiko samaa kypärää käyttää eri lajeissa?",
    a: [
      "Vain, jos kypärä on hyväksytty kaikkiin näihin käyttötarkoituksiin. Joissakin kypärissä on useampi standardimerkintä, mutta yleensä eri lajien kypärät on suunniteltu erilaisia iskuja ja olosuhteita varten. Tarkista merkinnät kypärän sisältä ja valmistajan ohjeista.",
    ],
  },
  {
    id: "ukk-materiaali",
    q: "Mikä on paras kypärämateriaali?",
    a: [
      "Yhtä kaikissa tilanteissa parasta materiaalia ei ole. Kypärän soveltuvuus riippuu käyttötarkoituksesta, rakenteesta, hyväksynnästä, istuvuudesta ja muista ominaisuuksista.",
    ],
  },
  {
    id: "ukk-hinta",
    q: "Onko kalliimpi kypärä turvallisempi?",
    a: [
      "Hinta ei yksin kerro kypärän suojaavuudesta. Hintaan vaikuttavat usein myös paino, materiaalit, tuuletus, mukavuus ja lisäominaisuudet. Käyttötarkoitukseen hyväksytty ja hyvin istuva kypärä on tärkeämpi kuin hintaluokka.",
    ],
  },
  {
    id: "ukk-lasten-kypara",
    q: "Milloin lasten kypärä pitää vaihtaa?",
    a: [
      "Kun kypärä on käynyt pieneksi, se on saanut voimakkaan iskun, siinä on vaurioita tai valmistajan ilmoittama käyttöikä on täyttynyt. Lapsen pää kasvaa, joten istuvuus kannattaa tarkistaa esimerkiksi kauden alussa. Älä osta kypärää kasvunvaraa ajatellen – liian suuri kypärä ei istu kunnolla.",
      "Lasten kypärä valitaan lajin mukaan samalla tavalla kuin aikuisten. Pienille lapsille on myös EN 1080 -kypäriä, joiden hihna on suunniteltu aukeamaan kuormituksessa kuristumisriskin vuoksi. Tarkista valmistajan ohjeista, mihin käyttöön kypärä on tarkoitettu.",
    ],
  },
  {
    id: "ukk-kaytetty",
    q: "Voiko käytettyä kypärää ostaa?",
    a: [
      "Käytetyn kypärän historiaa on vaikea tietää. Kypärä on voinut saada iskun, joka ei näy päältä. Myös ikä, UV-säteily, säilytys ja kuluneet sisäosat voivat heikentää kypärää, eikä edellisen käyttäjän päähän muotoutunut sisäosa välttämättä istu sinulle.",
      "Jos harkitset käytettyä kypärää, tarkista vähintään valmistuspäivä, hyväksyntämerkinnät ja vauriot – ja pyydä tietoa kypärän käyttöhistoriasta.",
    ],
  },
  {
    id: "ukk-en-1078",
    q: "Mitä EN 1078 tarkoittaa?",
    a: [
      "EN 1078 on eurooppalainen standardi pyöräilijöiden sekä rullalauta- ja rullaluistinkäyttäjien kypärille. Merkintä kertoo, että kypärä on suunniteltu ja testattu näihin käyttötarkoituksiin.",
    ],
  },
  {
    id: "ukk-ece",
    q: "Mitä ECE R22.06 tarkoittaa?",
    a: [
      "ECE R22.06 on YK:n Euroopan talouskomission sääntö, jonka mukaan moottoripyöräkypärät tyyppihyväksytään. Se on säännön nykyinen versio. Hyväksyntätarra löytyy yleensä leukahihnasta, ja siinä on myös merkintä P, J tai P/J kypärätyypin mukaan.",
    ],
  },
  {
    id: "ukk-mips",
    q: "Mikä on MIPS?",
    a: [
      "MIPS (Multi-directional Impact Protection System) on järjestelmä, jonka tarkoituksena on vähentää tietynlaisissa iskuissa päähän välittyvää kiertoliikettä. Se on yksi ominaisuus muiden joukossa – ei korvike oikealle käyttötarkoitukselle, hyväksynnälle tai istuvuudelle.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Lähteet ja alatunniste                                              */
/* ------------------------------------------------------------------ */

export const officialSources = [
  { label: "Traficom", href: "https://www.traficom.fi/" },
  {
    label: "Työterveyslaitos – päänsuojaimet",
    href: "https://www.ttl.fi/teemat/tyoturvallisuus/henkilonsuojaimet/suojainten-valinta-ja-kaytto/paansuojaimet",
  },
  { label: "Euroopan komissio – sisämarkkinat", href: "https://single-market-economy.ec.europa.eu/" },
];

export const footerLinks = [
  { label: "Kypärät", href: "#kyparat" },
  { label: "Käyttötarkoitukset", href: "#kayttotarkoitukset" },
  { label: "Standardit", href: "#standardit" },
  { label: "Koko-opas", href: "#koko-opas" },
  { label: "UKK", href: "#ukk" },
  { label: "Tietoa meistä", href: "#tietoa-meista" },
  { label: "Yhteystiedot", href: "#yhteystiedot" },
];

export const disclaimer =
  "Tämä sivusto tarjoaa yleistä tietoa eikä korvaa valmistajan käyttöohjeita, viranomaisohjeita tai ammattilaisen arviota.";
