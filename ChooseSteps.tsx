import { chooseSteps } from "@/content";
import SectionHeading from "@/SectionHeading";

export default function ChooseSteps() {
  return (
    <section id="valinta" aria-labelledby="valinta-otsikko" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="valinta-otsikko"
          eyebrow="Valintaopas"
          title="Näin valitset oikean kypärän"
          lead="Viisi vaihetta järjestyksessä. Käyttötarkoitus ratkaistaan aina ensin."
        />
        <ol className="relative mt-12 grid gap-5 xl:grid-cols-5 xl:gap-4 xl:before:absolute xl:before:inset-x-0 xl:before:top-6 xl:before:h-px xl:before:bg-line xl:before:content-['']">
          {chooseSteps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 xl:flex-col">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-lg font-semibold text-white ring-8 ring-paper">
                {i + 1}
              </span>
              <div className="flex-1 rounded-3xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                {s.bullets && (
                  <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fjord" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
