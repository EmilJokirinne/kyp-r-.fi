import { mistakes } from "@/content";
import SectionHeading from "@/SectionHeading";

export default function MistakesSection() {
  return (
    <section id="virheet" aria-labelledby="virheet-otsikko" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="virheet-otsikko"
          eyebrow="Vältä nämä"
          title="7 yleistä virhettä kypärää valittaessa"
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mistakes.map((m, i) => (
            <li
              key={m.title}
              className={`group rounded-3xl border border-line bg-white p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="text-4xl font-semibold tracking-tight text-fjord/25 transition-colors group-hover:text-signal">
                {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{m.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
