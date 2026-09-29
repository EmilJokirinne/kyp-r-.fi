import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { HelmetCategory } from "@/content";
import HelmetArt from "@/HelmetArt";
import { toneStyle, type ArtTone } from "@/art-tones";

type Props = { category: HelmetCategory; tone?: ArtTone };

/** Yksittäinen kypäräluokan kortti. Näyttää valokuvan, jos `image` on asetettu. */
export default function HelmetCategoryCard({ category, tone = "light" }: Props) {
  const bg = tone === "fjord" ? "bg-fjord-soft" : tone === "dark" ? "bg-ink" : "bg-mist";
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
      <div style={toneStyle(tone)} className={`relative aspect-[16/10] overflow-hidden ${bg}`}>
        {category.image ? (
          <Image
            src={category.image}
            alt={category.imageAlt ?? category.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6">
            <HelmetArt
              kind={category.art}
              className="h-auto w-[62%] transition-transform duration-500 motion-safe:group-hover:scale-[1.05]"
            />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-xs font-medium text-ink backdrop-blur">
          {category.standard}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{category.name}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{category.use}</p>
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-ink-soft">
          {category.traits.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1 w-3 rounded-full bg-fjord" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
        <a
          href={category.href}
          className="mt-6 inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-fjord underline-offset-4 hover:underline"
        >
          Lue lisää<span className="sr-only">: {category.name.replace("­", "")}</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
