"use client";

import { useId, useState } from "react";
import { Ruler } from "lucide-react";
import { sizeNote, sizeTable } from "@/content";
import SectionHeading from "@/SectionHeading";

function HeadIllustration() {
  return (
    <svg viewBox="0 -44 320 324" className="h-auto w-full" role="img" aria-labelledby="paa-kuva-otsikko">
      <title id="paa-kuva-otsikko">
        Kuva: mittanauha kierretään pään ympäri hieman kulmakarvojen ja korvien yläpuolelta.
      </title>
      {/* Pää sivusta */}
      <path
        d="M100 236c-18-18-30-44-30-78 0-62 42-112 104-112 58 0 98 42 98 98 0 14 4 24 12 36 5 8 2 14-6 15l-6 1v18c0 12-10 20-24 18l-16-2-2 34H112Z"
        fill="#ECEAE4"
        stroke="#15171A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Korva */}
      <path d="M150 150c-10 0-16 10-14 22 2 12 12 18 20 14" fill="none" stroke="#15171A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Kulmakarva ja silmä */}
      <path d="M240 128c8-4 18-4 24 0" fill="none" stroke="#15171A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="252" cy="142" r="3" fill="#15171A" />
      {/* Mittanauha: takaosa (katkoviiva) ja etuosa */}
      <ellipse cx="172" cy="112" rx="104" ry="18" transform="rotate(4 172 112)" fill="none" stroke="#E0612A" strokeWidth="3" strokeDasharray="5 6" opacity="0.5" />
      <path d="M68 104c20 22 90 32 208 20" fill="none" stroke="#E0612A" strokeWidth="9" strokeLinecap="round" />
      {[...Array(14)].map((_, i) => (
        <line key={i} x1={84 + i * 13} x2={84 + i * 13} y1={116 + i * 0.6} y2={121 + i * 0.6} stroke="#fff" strokeWidth="1.5" />
      ))}
      {/* Selite */}
      <line x1="272" y1="116" x2="262" y2="4" stroke="#15171A" strokeWidth="1.2" />
      <g fontFamily="inherit" fontSize="13" fill="#15171A" textAnchor="end">
        <text x="316" y="-24" fontWeight="600">Noin 1–2 cm</text>
        <text x="316" y="-7">kulmakarvojen yläpuolelta</text>
      </g>
    </svg>
  );
}

export default function SizeGuide() {
  const inputId = useId();
  const [value, setValue] = useState("");
  const cm = parseFloat(value.replace(",", "."));
  const valid = Number.isFinite(cm) && cm > 0;
  const matches = valid ? sizeTable.filter((r) => cm >= r.min && cm <= r.max) : [];

  let result = "";
  if (valid) {
    if (matches.length === 2) {
      result = `Rajalla: ${matches[0].size} tai ${matches[1].size}. Sovita molempia kokoja ja tarkista valmistajan taulukko.`;
    } else if (matches.length === 1) {
      result = `Tyypillisesti koko ${matches[0].size}. Tarkista silti valmistajan oma kokotaulukko.`;
    } else {
      result = "Mitta on esimerkkitaulukon (48–64 cm) ulkopuolella. Tarkista valmistajan kokotaulukko – monilla valmistajilla on myös pienempiä ja suurempia kokoja.";
    }
  }

  return (
    <section id="koko-opas" aria-labelledby="koko-otsikko" className="scroll-mt-20 bg-mist/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="koko-otsikko"
          eyebrow="Koko-opas"
          title="Miten mittaan oikean kypäräkoon?"
          lead="Tarvitset joustamattoman mittanauhan. Mittaa kaksi tai kolme kertaa ja käytä suurinta lukemaa."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <figure className="rounded-3xl border border-line bg-white p-6 sm:p-10">
            <HeadIllustration />
            <figcaption className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              Kierrä mittanauha pään ympäri hieman kulmakarvojen yläpuolelta ja korvien yläpuolelta. Mittaa pään
              suurin ympärys.
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-ink p-6 text-white sm:p-8">
              <label htmlFor={inputId} className="flex items-center gap-2 text-lg font-semibold">
                <Ruler aria-hidden="true" className="h-5 w-5 text-signal" />
                Pään ympärys senttimetreinä
              </label>
              <div className="mt-4 flex items-center gap-3">
                <input
                  id={inputId}
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="esim. 57"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  aria-describedby={`${inputId}-tulos`}
                  className="w-full max-w-[12rem] rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-mono text-2xl text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                />
                <span className="text-lg text-white/70">cm</span>
              </div>
              <p id={`${inputId}-tulos`} aria-live="polite" className="mt-4 min-h-[3rem] leading-relaxed text-white/85">
                {result || "Syötä mitta, niin näet tyypillisen kokoluokan esimerkkitaulukosta."}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-line bg-white">
              <table className="w-full text-left">
                <caption className="sr-only">Esimerkki: pään ympärys ja tyypillinen kypäräkoko</caption>
                <thead className="bg-paper">
                  <tr>
                    <th scope="col" className="px-6 py-3.5 text-sm font-semibold text-ink">Pään ympärys</th>
                    <th scope="col" className="px-6 py-3.5 text-sm font-semibold text-ink">Tyypillinen koko*</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeTable.map((r) => {
                    const hit = matches.some((m) => m.size === r.size);
                    return (
                      <tr key={r.size} className={`border-t border-line transition-colors ${hit ? "bg-fjord-soft" : ""}`}>
                        <td className="px-6 py-3.5 font-mono text-ink-soft">
                          {r.min}–{r.max} cm
                        </td>
                        <td className="px-6 py-3.5 font-semibold text-ink">{r.size}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="border-t border-line bg-signal-soft px-6 py-4 text-sm leading-relaxed text-ink">
                <span className="font-semibold">*</span> {sizeNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
