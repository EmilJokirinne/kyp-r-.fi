import type { CSSProperties } from "react";
import { ArrowRight, Check } from "lucide-react";
import { hero } from "@/content";
import HelmetArt from "@/HelmetArt";

type Tone = { bg: string; text: string; vars: CSSProperties };

const tones: Tone[] = [
  {
    bg: "bg-ink",
    text: "text-white",
    vars: { "--shell": "#F1EEE7", "--detail": "#9AA3AD", "--glass": "#1E3A5F", "--bg": "#15171A" } as CSSProperties,
  },
  {
    bg: "bg-fjord-soft",
    text: "text-ink",
    vars: { "--shell": "#173B5C", "--detail": "#8FB0CC", "--glass": "#0F2A43", "--bg": "#DCE6EF" } as CSSProperties,
  },
  {
    bg: "bg-mist",
    text: "text-ink",
    vars: { "--shell": "#2A2E33", "--detail": "#8C8F94", "--glass": "#E0612A", "--bg": "#ECEAE4" } as CSSProperties,
  },
  {
    bg: "bg-white",
    text: "text-ink",
    vars: { "--shell": "#E0612A", "--detail": "#15171A", "--glass": "#15171A", "--bg": "#FFFFFF" } as CSSProperties,
  },
  {
    bg: "bg-fjord",
    text: "text-white",
    vars: { "--shell": "#F7F5F0", "--detail": "#7F9AB3", "--glass": "#0F2A43", "--bg": "#173B5C" } as CSSProperties,
  },
];

const placement = [
  "col-span-4 row-span-4 col-start-1 row-start-1",
  "col-span-2 row-span-3 col-start-5 row-start-1",
  "col-span-2 row-span-3 col-start-5 row-start-4",
  "col-span-2 row-span-2 col-start-1 row-start-5",
  "col-span-2 row-span-2 col-start-3 row-start-5",
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-otsikko" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-fjord">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-otsikko"
            className="text-balance text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[3.4rem] xl:text-[4rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">{hero.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-fjord"
            >
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3.5 font-semibold text-ink transition hover:border-ink/40"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-line pt-6 text-sm font-medium text-ink-soft min-[420px]:grid-cols-2">
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-fjord" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:col-span-6">
          <div className="grid aspect-[6/5] grid-cols-6 grid-rows-6 gap-2.5 sm:gap-3" aria-hidden="true">
            {hero.tiles.map((tile, i) => {
              const tone = tones[i % tones.length];
              const big = i === 0;
              return (
                <div
                  key={tile.code}
                  style={tone.vars}
                  className={`relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl ${tone.bg} ${tone.text} ${placement[i]}`}
                >
                  <div className="flex flex-1 items-center justify-center p-2 sm:p-4">
                    <HelmetArt
                      kind={tile.kind}
                      className={`${big ? "w-[82%]" : "w-[88%]"} h-auto drop-shadow-[0_18px_24px_rgba(0,0,0,0.18)]`}
                    />
                  </div>
                  <div className={`flex items-baseline justify-between gap-2 px-3 pb-2.5 sm:px-4 sm:pb-3.5 ${big ? "" : "text-[0.7rem] sm:text-xs"}`}>
                    <span className={`font-semibold ${big ? "text-sm sm:text-base" : "hidden sm:inline"}`}>{tile.label}</span>
                    <span className="font-mono text-[0.68rem] tracking-wide opacity-75 sm:text-xs">{tile.code}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Eri käyttötarkoituksiin suunniteltuja kypärätyyppejä ja niitä koskevia standardeja.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
