import { site } from "@/site";

/** Sanamerkki ja pieni kypäräsymboli. */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="9" fill={light ? "#F7F5F0" : "#15171A"} />
        <path d="M7 20.5C7 13.6 11.3 9 17 9c4.6 0 8 3.2 8 8v3.5Z" fill={light ? "#15171A" : "#F7F5F0"} />
        <rect x="6" y="21.5" width="20" height="2.2" rx="1.1" fill="#E0612A" />
      </svg>
      <span className={`text-[1.05rem] font-bold tracking-[0.08em] ${light ? "text-white" : "text-ink"}`}>
        {site.logo}
      </span>
    </span>
  );
}
