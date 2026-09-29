import type { ReactNode } from "react";
import { AlertTriangle, Info } from "lucide-react";

type Props = {
  children: ReactNode;
  title?: string;
  variant?: "info" | "warning";
  className?: string;
};

/** Huomautuslaatikko turvallisuuteen liittyville tärkeille asioille. */
export default function SafetyNotice({ children, title, variant = "info", className = "" }: Props) {
  const warning = variant === "warning";
  const Icon = warning ? AlertTriangle : Info;
  return (
    <aside
      role="note"
      className={`flex gap-3 rounded-2xl border p-4 sm:p-5 ${
        warning ? "border-signal/35 bg-signal-soft text-ink" : "border-fjord/20 bg-fjord-soft text-ink"
      } ${className}`}
    >
      <Icon
        aria-hidden="true"
        className={`mt-0.5 h-5 w-5 shrink-0 ${warning ? "text-signal-strong" : "text-fjord"}`}
      />
      <div className="text-[0.95rem] leading-relaxed">
        {title && <p className="font-semibold">{title}</p>}
        <div className={title ? "mt-1 text-ink-soft" : ""}>{children}</div>
      </div>
    </aside>
  );
}
