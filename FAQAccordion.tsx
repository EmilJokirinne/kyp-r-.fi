"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/content";
import SectionHeading from "@/SectionHeading";

/** Saavutettava haitari: painike + aria-expanded + region. */
export default function FAQAccordion() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  // Avaa kysymys automaattisesti, jos siihen tullaan linkillä (esim. #ukk-lasten-kypara).
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (faqs.some((f) => f.id === id)) setOpen(id);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <section id="ukk" aria-labelledby="ukk-otsikko" className="scroll-mt-20 bg-mist/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="ukk-otsikko"
              eyebrow="UKK"
              title="Usein kysyttyä kypäristä"
              lead="Lyhyet vastaukset yleisimpiin kysymyksiin. Lakiasioissa tarkista aina ajantasainen tieto viranomaiselta."
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
            {faqs.map((f) => {
              const isOpen = open === f.id;
              return (
                <li key={f.id} id={f.id} className="scroll-mt-24">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${f.id}-vastaus`}
                      onClick={() => setOpen(isOpen ? null : f.id)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-paper sm:px-7"
                    >
                      <span className="text-[1.05rem] font-semibold leading-snug text-ink sm:text-lg">{f.q}</span>
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-ink text-white" : "bg-mist text-ink"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`${f.id}-vastaus`}
                    role="region"
                    aria-label={f.q}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    inert={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-3 px-5 pb-6 leading-relaxed text-ink-soft sm:px-7">
                        {f.a.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
