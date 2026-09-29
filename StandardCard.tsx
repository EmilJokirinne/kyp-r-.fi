import type { Standard } from "@/content";

/** Standardikortti: mitä koskee, missä käytetään, mitä tarkistaa. */
export default function StandardCard({ standard }: { standard: Standard }) {
  return (
    <article
      id={standard.id}
      className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-line bg-white p-6 transition duration-300 target:ring-2 target:ring-fjord motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 sm:p-7"
    >
      <p className="font-mono text-2xl font-semibold tracking-tight text-fjord">{standard.code}</p>
      <h3 className="mt-1 text-lg font-semibold leading-snug text-ink">{standard.title}</h3>

      <dl className="mt-5 space-y-4 border-t border-line pt-5 text-[0.95rem] leading-relaxed">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Mitä standardi koskee?</dt>
          <dd className="mt-1 text-ink-soft">{standard.covers}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Missä sitä käytetään?</dt>
          <dd className="mt-1 text-ink-soft">{standard.where}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Mitä kannattaa tarkistaa?</dt>
          <dd className="mt-1">
            <ul className="space-y-1.5 text-ink-soft">
              {standard.check.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {c}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  );
}
