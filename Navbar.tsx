"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content";
import { site } from "@/site";
import Logo from "@/Logo";

/** Kiinteä yläpalkki. Mobiilissa hampurilaisvalikko. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <nav aria-label="Päävalikko" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="rounded-md" aria-label={`${site.name} – etusivun alkuun`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-[0.92rem] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#kayttotarkoitukset"
            className="hidden rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-fjord sm:inline-flex"
          >
            Löydä oikea kypärä
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobiilivalikko"
            aria-label={open ? "Sulje valikko" : "Avaa valikko"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div id="mobiilivalikko" hidden={!open} className="border-t border-line bg-paper lg:hidden">
        <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#kayttotarkoitukset"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-ink px-4 py-3 text-center font-semibold text-white"
            >
              Löydä oikea kypärä
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
