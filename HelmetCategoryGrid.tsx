import { helmetCategories } from "@/content";
import HelmetCategoryCard from "@/HelmetCategoryCard";
import SectionHeading from "@/SectionHeading";
import SafetyNotice from "@/SafetyNotice";
import type { ArtTone } from "@/art-tones";

const tones: ArtTone[] = ["light", "fjord", "light", "fjord", "light", "fjord", "light", "fjord", "light"];

export default function HelmetCategoryGrid() {
  return (
    <section id="kyparat" aria-labelledby="kyparat-otsikko" className="scroll-mt-20 bg-mist/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="kyparat-otsikko"
            eyebrow="Kypärätyypit"
            title="Kypärät eri käyttötarkoituksiin"
            lead="Jokainen kypärätyyppi on suunniteltu oman lajinsa iskuihin ja olosuhteisiin."
          />
          <SafetyNotice className="lg:max-w-sm" variant="warning">
            Kypärätyyppi ei korvaa toista. Käytä kypärää, joka on tarkoitettu juuri siihen toimintaan, jota harrastat.
          </SafetyNotice>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {helmetCategories.map((c, i) => (
            <li key={c.name}>
              <HelmetCategoryCard category={c} tone={tones[i]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
