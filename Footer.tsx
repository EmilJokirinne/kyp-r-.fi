import { ArrowUpRight } from "lucide-react";
import { disclaimer, footerLinks, officialSources } from "@/content";
import { site } from "@/site";
import Logo from "@/Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-block rounded-md" aria-label={`${site.name} – takaisin alkuun`}>
              <Logo tone="light" />
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-white/70">{site.tagline}</p>
          </div>

          <nav aria-label="Alatunnisteen linkit" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Sivusto</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="rounded text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8 lg:col-span-5">
            <div id="tietoa-meista" className="scroll-mt-24">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Tietoa meistä</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                {site.name} on suomenkielinen tietopalvelu, joka kokoaa yleistä tietoa kypäristä, standardeista ja
                kypärän valinnasta. Sivusto ei testaa, sertifioi eikä hyväksy kypäriä.
              </p>
            </div>
            <div id="yhteystiedot" className="scroll-mt-24">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Yhteystiedot</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                {site.contactEmail ? (
                  <>
                    Palaute ja korjausehdotukset:{" "}
                    <a href={`mailto:${site.contactEmail}`} className="text-white underline underline-offset-4">
                      {site.contactEmail}
                    </a>
                  </>
                ) : (
                  "Yhteystiedot julkaistaan tällä sivulla."
                )}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Viralliset lähteet</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {officialSources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
                    >
                      {s.label}
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      <span className="sr-only">(avautuu uuteen välilehteen)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl leading-relaxed">{disclaimer}</p>
          <p className="shrink-0">
            © {site.year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
