import { specs } from "@/content";
import SectionHeading from "@/SectionHeading";
import SpecificationCard from "@/SpecificationCard";

export default function SpecsSection() {
  return (
    <section id="tekniset-tiedot" aria-labelledby="tekniset-otsikko" className="scroll-mt-20 bg-mist/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="tekniset-otsikko"
          eyebrow="Tietoa kypäristä"
          title="Mitä kypärän tekniset tiedot tarkoittavat?"
          lead="Avaa kortti nähdäksesi selityksen. Mikään yksittäinen ominaisuus ei yksin ratkaise kypärän suojaavuutta."
        />
        <ul className="mt-12 grid items-start gap-4 md:grid-cols-2">
          {specs.map((s, i) => (
            <li key={s.id}>
              <SpecificationCard spec={s} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
