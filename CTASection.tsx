import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-otsikko" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-fjord-deep px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/[0.04]"
        />
        <div aria-hidden="true" className="absolute bottom-0 left-0 h-1.5 w-24 bg-signal" />
        <div className="relative max-w-3xl">
          <h2 id="cta-otsikko" className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Valitse kypärä käyttö&shy;tarkoituksen mukaan.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            Oikea kypärä on yhdistelmä sopivaa käyttötarkoitusta, hyväksyntää, istuvuutta ja käytännöllisiä
            ominaisuuksia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kyparat"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-mist"
            >
              Tutustu kypärätyyppeihin
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
            </a>
            <a
              href="#koko-opas"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Lue koko-opas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
