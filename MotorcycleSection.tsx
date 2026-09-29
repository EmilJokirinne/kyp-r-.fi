import { motoFactors, motoStyles } from "@/content";
import HelmetArt from "@/HelmetArt";
import SectionHeading from "@/SectionHeading";
import SafetyNotice from "@/SafetyNotice";
import { toneStyle } from "@/art-tones";

export default function MotorcycleSection() {
  return (
    <section id="moottoripyorakypara" aria-labelledby="moto-otsikko" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="moto-otsikko"
          eyebrow="Syvemmin: moottoripyöräily"
          title="Moottoripyöräkypärä: mitä kannattaa tietää?"
          lead="Moottoripyöräkypärä on tyyppihyväksytty kokonaisuus. Kypärätyyppi, hyväksyntä ja istuvuus kulkevat käsi kädessä."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {motoStyles.map((m) => (
            <li
              key={m.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
            >
              <div style={toneStyle("dark")} className="flex aspect-[4/3] items-center justify-center bg-ink p-6">
                <HelmetArt kind={m.art} className="h-auto w-[78%]" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">{m.name}</h3>
                  <span className="shrink-0 rounded-md bg-mist px-2 py-0.5 font-mono text-xs text-ink-soft">{m.mark}</span>
                </div>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{m.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">Mihin kiinnittää huomiota?</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Ominaisuudet vaikuttavat mukavuuteen, näkyvyyteen ja siihen, miten kypärä pysyy päässä. Ne eivät
              korvaa hyväksyntää.
            </p>
            <SafetyNotice variant="warning" className="mt-6" title="Tärkeää">
              Käytä vain kypärää, joka on hyväksytty käyttötarkoitukseesi.
            </SafetyNotice>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {motoFactors.map((f) => (
              <div key={f.name} className="bg-white p-5">
                <dt className="font-semibold text-ink">{f.name}</dt>
                <dd className="mt-1 text-[0.95rem] leading-relaxed text-muted">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
