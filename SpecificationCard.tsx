import { Plus } from "lucide-react";
import type { Spec } from "@/content";

/**
 * Avattava teknisten tietojen kortti. Käyttää natiivia <details>-elementtiä,
 * joten se toimii näppäimistöllä ja ruudunlukijoilla ilman JavaScriptiä.
 */
export default function SpecificationCard({ spec, index }: { spec: Spec; index: number }) {
  return (
    <details className="spec-card group h-full rounded-3xl border border-line bg-white transition-shadow open:shadow-xl open:shadow-ink/5 hover:border-ink/25">
      <summary className="flex cursor-pointer list-none items-start gap-4 rounded-3xl p-6 [&::-webkit-details-marker]:hidden">
        <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-semibold text-ink">{spec.title}</span>
          <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted">{spec.summary}</span>
        </span>
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-ink transition-transform duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-white"
        >
          <Plus className="h-4 w-4" />
        </span>
      </summary>
      <div className="px-6 pb-6 pl-[3.75rem]">
        <p className="leading-relaxed text-ink-soft">{spec.body}</p>
        {spec.bullets && (
          <dl className="mt-4 space-y-2.5 border-t border-line pt-4">
            {spec.bullets.map((b) => (
              <div key={b.term} className="text-[0.95rem] leading-relaxed">
                <dt className="inline font-semibold text-ink">{b.term}: </dt>
                <dd className="inline text-muted">{b.text}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </details>
  );
}
