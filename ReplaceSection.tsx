import { ArrowUpRight } from "lucide-react";
import { officialSources, replaceReasons } from "@/content";
import SectionHeading from "@/SectionHeading";

export default function ReplaceSection() {
  return (
    <section id="vaihtaminen" aria-labelledby="vaihto-otsikko" className="scroll-mt-20 bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="vaihto-otsikko"
          tone="dark"
          eyebrow="Käyttöikä ja kunto"
          title="Milloin kypärä pitää vaihtaa?"
          lead="Kypärän iskua vaimentava rakenne toimii vain kerran. Kulunut tai vaurioitunut kypärä ei välttämättä suojaa suunnitellulla tavalla."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {replaceReasons.map((r, i) => (
            <li key={r.title} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{r.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl leading-relaxed text-white/80">
            Myös työturvallisuusohjeissa korostetaan, että kova isku voi heikentää kypärän suojauskykyä, vaikka
            vauriota ei näkyisi. Tarkista säännöllisesti sekä kuori että sisäosat. Lisätietoa päänsuojainten
            valinnasta ja huollosta löytyy Työterveyslaitokselta.
          </p>
          <a
            href={officialSources[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Työterveyslaitos
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">(avautuu uuteen välilehteen)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
