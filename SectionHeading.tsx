import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/** Yhtenäinen osion otsikko: yläotsikko, H2 ja ingressi. */
export default function SectionHeading({ eyebrow, title, lead, id, align = "left", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${
            dark ? "text-white/65" : "text-fjord"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-pretty text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
