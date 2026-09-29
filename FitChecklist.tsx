"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { fitChecklist } from "@/content";
import SectionHeading from "@/SectionHeading";

/** Interaktiivinen istuvuustesti. */
export default function FitChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => fitChecklist.map(() => false));
  const count = checked.filter(Boolean).length;
  const all = count === fitChecklist.length;

  const toggle = (i: number) => setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <section id="istuvuus" aria-labelledby="istuvuus-otsikko" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="istuvuus-otsikko"
            eyebrow="Istuvuustesti"
            title="Sopiiko kypärä oikein?"
            lead="Laita kypärä päähän, kiinnitä hihna ja käy kohdat läpi. Ravista päätä ja katso ylös, alas ja sivuille."
          />
          <div className="mt-8">
            <div className="flex items-center justify-between text-sm font-semibold text-ink">
              <span>Tarkistettu</span>
              <span aria-live="polite">
                {count} / {fitChecklist.length}
              </span>
            </div>
            <div
              className="mt-2 h-2 overflow-hidden rounded-full bg-mist"
              role="progressbar"
              aria-label="Istuvuustestin eteneminen"
              aria-valuemin={0}
              aria-valuemax={fitChecklist.length}
              aria-valuenow={count}
            >
              <div
                className="h-full rounded-full bg-fjord transition-[width] duration-300"
                style={{ width: `${(count / fitChecklist.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <fieldset className="rounded-3xl border border-line bg-white p-2 sm:p-3">
            <legend className="sr-only">Istuvuuden tarkistuslista</legend>
            <ul>
              {fitChecklist.map((item, i) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-fjord">
                    <input type="checkbox" className="peer sr-only" checked={checked[i]} onChange={() => toggle(i)} />
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                        checked[i] ? "border-fjord bg-fjord text-white" : "border-ink/30 bg-white"
                      }`}
                    >
                      {checked[i] && <Check className="h-4 w-4" strokeWidth={3} />}
                    </span>
                    <span className={`text-[1.02rem] leading-relaxed ${checked[i] ? "text-ink" : "text-ink-soft"}`}>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          <div
            className={`mt-4 flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between ${
              all ? "bg-fjord text-white" : "bg-signal-soft text-ink"
            }`}
          >
            <p className="font-semibold leading-snug">
              {all
                ? "Hyvä merkki. Varmista vielä, että kypärä on hyväksytty käyttötarkoitukseesi, ja noudata valmistajan ohjeita."
                : "Jos kypärä ei istu oikein, kokeile toista kokoa tai mallia."}
            </p>
            {count > 0 && (
              <button
                type="button"
                onClick={() => setChecked(fitChecklist.map(() => false))}
                className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-full px-3 py-1.5 text-sm font-semibold transition sm:self-auto ${
                  all ? "bg-white/15 hover:bg-white/25" : "bg-white hover:bg-white/70"
                }`}
              >
                <RotateCcw aria-hidden="true" className="h-4 w-4" />
                Tyhjennä
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
