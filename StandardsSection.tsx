import { infoSources, standards } from "@/content";
import SectionHeading from "@/SectionHeading";
import StandardCard from "@/StandardCard";
import SafetyNotice from "@/SafetyNotice";

export default function StandardsSection() {
  return (
    <section id="standardit" aria-labelledby="standardit-otsikko" className="scroll-mt-20 bg-mist/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="standardit-otsikko"
              eyebrow="Kypärän standardit"
              title="Mitä kypärän standardi kertoo?"
              lead="Standardi kertoo, millaiseen käyttötarkoitukseen kypärä on suunniteltu ja millaisia vaatimuksia sen tulee täyttää kyseisessä käyttötarkoituksessa."
            />
          </div>
          <div className="flex items-end lg:col-span-5">
            <SafetyNotice title="Standardit eivät ole paremmuusjärjestys">
              Eri standardit on laadittu eri käyttötarkoituksiin. Yksi standardi ei tarkoita, että kypärä olisi
              toista turvallisempi – se kertoo, mihin käyttöön kypärä on tarkoitettu.
            </SafetyNotice>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-fjord">Mistä tieto tulee?</h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {infoSources.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-4">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-semibold leading-snug text-ink">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {standards.map((s) => (
            <li key={s.id}>
              <StandardCard standard={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
