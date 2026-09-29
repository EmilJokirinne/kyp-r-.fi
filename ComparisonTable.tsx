import { MoveHorizontal } from "lucide-react";
import { comparisonRows } from "@/content";
import SectionHeading from "@/SectionHeading";

export default function ComparisonTable() {
  return (
    <section id="vertailu" aria-labelledby="vertailu-otsikko" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="vertailu-otsikko"
          eyebrow="Vertailu"
          title="Kypärätyypit nopeasti vertailtuna"
          lead="Tärkein ero ei ole hinta tai ulkonäkö vaan se, mihin käyttöön kypärä on suunniteltu."
        />

        <p className="mt-8 flex items-center gap-2 text-sm text-muted md:hidden">
          <MoveHorizontal aria-hidden="true" className="h-4 w-4" />
          Vieritä taulukkoa sivusuunnassa
        </p>

        <div
          role="region"
          aria-labelledby="vertailu-otsikko"
          tabIndex={0}
          className="mt-3 overflow-x-auto rounded-2xl border border-line bg-white md:mt-10"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Kypärätyyppien vertailu: käyttökohde, standardi ja tärkeät ominaisuudet
            </caption>
            <thead>
              <tr className="bg-ink text-white">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">Kypärätyyppi</th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">Tyypillinen käyttökohde</th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">Standardi</th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">Tärkeät ominaisuudet</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.type} className="border-t border-line transition-colors odd:bg-white even:bg-paper hover:bg-fjord-soft/60">
                  <th scope="row" className="px-5 py-4 font-semibold text-ink">{r.type}</th>
                  <td className="px-5 py-4 text-ink-soft">{r.use}</td>
                  <td className="px-5 py-4">
                    <span className="whitespace-nowrap rounded-md bg-fjord-soft px-2 py-1 font-mono text-sm text-fjord-deep">
                      {r.standard}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink-soft">{r.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">
          Työkäytössä korkeampaa suojaustasoa edellyttäviin tehtäviin on myös EN 14052 -kypäriä. Mopoilussa käytetään tyyppihyväksyttyä ECE R22 -kypärää.
        </p>
      </div>
    </section>
  );
}
