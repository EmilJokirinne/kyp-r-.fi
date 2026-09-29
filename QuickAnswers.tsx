import { ArrowUpRight } from "lucide-react";
import { quickAnswers } from "@/content";

/** Viisi keskeistä kysymystä ja lyhyet vastaukset heti heron alla. */
export default function QuickAnswers() {
  return (
    <section aria-labelledby="pikavastaukset" className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <h2 id="pikavastaukset" className="text-sm font-semibold uppercase tracking-[0.16em] text-fjord">
          Viisi kysymystä – lyhyet vastaukset
        </h2>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {quickAnswers.map((item, i) => (
            <li key={item.q} className="flex flex-col bg-white p-5">
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              <h3 className="mt-2 text-base font-semibold leading-snug text-ink">{item.q}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.a}</p>
              <a
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 self-start rounded text-sm font-semibold text-fjord underline-offset-4 hover:underline"
              >
                {item.link}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
