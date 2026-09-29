"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { useCases } from "@/content";
import HelmetArt from "@/HelmetArt";
import SectionHeading from "@/SectionHeading";
import SafetyNotice from "@/SafetyNotice";
import { toneStyle } from "@/art-tones";

/**
 * Käyttötarkoituksen valitsin (saavutettava välilehtikomponentti).
 * Nuolinäppäimet siirtävät valintaa, Home/End hyppäävät ensimmäiseen/viimeiseen.
 */
export default function UseCaseSelector() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = useCases[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = useCases.length - 1;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section id="kayttotarkoitukset" aria-labelledby="kayttotarkoitukset-otsikko" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="kayttotarkoitukset-otsikko"
          eyebrow="Mihin käyttöön tarvitset kypärän?"
          title="Valitse käyttötarkoitus"
          lead="Eri lajeissa ja käyttötarkoituksissa kypärältä vaaditaan erilaisia ominaisuuksia."
        />

        <div
          role="tablist"
          aria-label="Käyttötarkoitukset"
          aria-orientation="horizontal"
          className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3"
        >
          {useCases.map((u, i) => {
            const selected = i === active;
            return (
              <button
                key={u.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`tab-${u.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`paneeli-${u.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                style={toneStyle(selected ? "dark" : "light")}
                className={`group flex min-w-0 flex-col items-start gap-2 rounded-2xl border p-3 text-left transition-all duration-200 sm:p-4 ${
                  selected
                    ? "border-ink bg-ink text-white shadow-lg shadow-ink/10"
                    : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink/30"
                }`}
              >
                <HelmetArt kind={u.art} className="h-10 w-14 shrink-0 sm:h-14 sm:w-20" />
                <span className="min-w-0 max-w-full break-words">
                  <span className="block text-sm font-semibold leading-tight sm:text-base">{u.title}</span>
                  <span className={`mt-0.5 block font-mono text-[0.7rem] sm:text-xs ${selected ? "text-white/70" : "text-muted"}`}>
                    {u.standards.join(" · ")}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`paneeli-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="mt-6 grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-5"
        >
          <div
            style={toneStyle("fjord")}
            className="flex items-center justify-center bg-fjord-soft p-8 lg:col-span-2 lg:p-12"
          >
            <HelmetArt kind={current.art} className="h-auto w-full max-w-[320px]" title={`Kuvitus kypärästä, käyttötarkoitus: ${current.title.toLowerCase()}`} />
          </div>

          <div className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{current.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">{current.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-ink">Standardi tai hyväksyntä:</span>
              {current.standards.map((s) => (
                <span key={s} className="rounded-full bg-ink px-3 py-1 font-mono text-sm text-white">
                  {s}
                </span>
              ))}
            </div>

            <h4 className="mt-7 text-sm font-semibold uppercase tracking-[0.12em] text-fjord">Tärkeät ominaisuudet</h4>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {current.specs.map((s) => (
                <li key={s} className="flex items-start gap-2 text-ink-soft">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-fjord" />
                  {s}
                </li>
              ))}
            </ul>

            {current.law && (
              <p className="mt-6 flex gap-2 rounded-xl bg-mist p-3.5 text-sm leading-relaxed text-ink-soft">
                <Scale aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                <span>
                  <span className="font-semibold text-ink">Suomessa: </span>
                  {current.law}
                </span>
              </p>
            )}

            {current.note && (
              <SafetyNotice variant="warning" className="mt-4">
                {current.note}
              </SafetyNotice>
            )}

            <a
              href={current.standardHref}
              className="mt-7 inline-flex items-center gap-2 rounded font-semibold text-fjord underline-offset-4 hover:underline"
            >
              Lue lisää standardista
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
