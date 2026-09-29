import type { HelmetKind } from "@/content";

/**
 * Piirretyt kypäräkuvitukset (SVG). Kevyitä, teräviä kaikilla näytöillä
 * eivätkä sisällä brändilogoja. Värit tulevat CSS-muuttujista:
 *   --shell  (kuori), --detail (yksityiskohdat), --glass (visiiri/lasit)
 */

type Props = {
  kind: HelmetKind;
  className?: string;
  title?: string;
};

const S = { fill: "var(--shell)" };
const D = { fill: "var(--detail)" };
const G = { fill: "var(--glass)" };
const line = {
  fill: "none",
  stroke: "var(--detail)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Shapes({ kind }: { kind: HelmetKind }) {
  switch (kind) {
    case "bike":
      return (
        <>
          <path style={S} d="M28 118C26 80 58 44 110 38c40-4 80 14 96 46 6 12 6 24 0 32-36 6-116 8-178 2Z" />
          <path style={D} d="M70 70c20-12 42-16 62-15l-4 9c-18 0-36 4-52 14Z" />
          <path style={D} d="M88 92c22-12 52-16 80-12l-4 10c-24-2-50 2-70 10Z" />
          <path style={D} d="M146 58c20 2 36 10 46 22l-8 4c-10-10-22-16-34-18Z" />
          <path style={D} d="M52 96c8-8 18-14 28-18l2 8c-9 4-17 9-24 15Z" />
          <path {...line} d="M30 118c60 6 140 4 176-2" />
          <path {...line} strokeWidth={2.5} d="M64 122l22 36 56-34" />
        </>
      );
    case "kids":
      return (
        <>
          <path style={S} d="M34 118C30 76 66 42 116 40c44-2 82 24 88 64v12c-54 8-114 8-170 2Z" />
          <circle style={D} cx="92" cy="66" r="9" />
          <circle style={D} cx="124" cy="60" r="9" />
          <circle style={D} cx="156" cy="70" r="9" />
          <circle style={D} cx="110" cy="92" r="7" />
          <circle style={D} cx="142" cy="92" r="7" />
          <rect x="34" y="100" width="12" height="10" rx="3" fill="var(--signal, #E0612A)" />
          <path {...line} d="M36 118c56 6 116 6 168-2" />
          <path {...line} strokeWidth={2.5} d="M70 122l20 34 50-32" />
        </>
      );
    case "moto":
      return (
        <>
          <path style={S} d="M40 112C34 66 70 30 124 28c50-2 84 30 86 76v28c-2 10-14 16-28 16H96c-26 0-48-12-56-36Z" />
          <path style={G} d="M124 66c32-4 66 6 80 26v12c-22 2-54 0-76-6-10-10-12-24-4-32Z" />
          <circle style={D} cx="110" cy="92" r="7" />
          <path {...line} d="M176 124h24M180 132h20" />
          <path {...line} d="M60 140c30 10 80 12 120 8" />
        </>
      );
    case "modular":
      return (
        <>
          <path style={S} d="M40 112C34 66 70 30 124 28c50-2 84 30 86 76v28c-2 10-14 16-28 16H96c-26 0-48-12-56-36Z" />
          <path style={G} d="M124 66c32-4 66 6 80 26v12c-22 2-54 0-76-6-10-10-12-24-4-32Z" />
          <path fill="none" stroke="var(--seam, var(--detail))" strokeWidth={3} strokeLinecap="round" d="M112 102c16 12 36 26 50 46" />
          <circle style={D} cx="110" cy="100" r="8" />
          <path {...line} d="M60 140c30 10 70 12 100 8" />
        </>
      );
    case "jet":
      return (
        <>
          <path style={S} d="M42 116C36 70 72 32 124 30c46-2 80 28 82 68l-16 2c-4 16-6 32-14 44H96c-26 0-46-10-54-28Z" />
          <path style={G} opacity={0.7} d="M150 46c34 8 58 32 62 58l2 28c-14 2-28 0-36-6l8-24c-2-22-14-42-36-52Z" />
          <circle style={D} cx="134" cy="80" r="6" />
          <path {...line} d="M60 138c30 8 70 10 110 6" />
        </>
      );
    case "offroad":
      return (
        <>
          <path style={S} d="M40 108C36 66 72 32 122 30c46-2 76 24 82 60l10 28c2 12-4 24-18 28l-46 4c-40 0-90-8-110-42Z" />
          <path style={G} d="M150 70c20 0 40 8 50 22l-4 12c-16 0-34-4-46-10Z" />
          <path style={D} d="M132 36c36-2 72 6 98 22l-8 8c-26-10-54-16-82-16Z" />
          <path {...line} d="M176 124l24-2M178 132l24-2" />
          <path {...line} d="M60 132c30 12 70 16 110 14" />
        </>
      );
    case "ski":
      return (
        <>
          <path style={S} d="M36 116C32 72 68 36 120 34c46-2 80 26 84 66v10c-44 6-104 10-168 6Z" />
          <path style={D} d="M84 50c10-4 20-6 30-6v8c-10 0-18 2-26 6ZM130 44c10 0 20 2 28 6l-4 7c-8-3-16-5-24-5Z" />
          <path style={D} d="M92 112c0-14 12-20 26-18 12 2 18 14 16 28-2 14-14 20-26 18-12-2-16-14-16-28Z" />
          <path style={D} d="M168 70c20 4 38 18 44 34l-12 10c-6-16-20-28-38-32Z" />
          <path style={G} d="M184 82c16 4 30 14 34 28l-4 12c-12-4-24-8-34-14-4-10-2-20 4-26Z" />
          <path {...line} d="M38 116c56 4 110 2 166-6" />
        </>
      );
    case "climb":
      return (
        <>
          <path style={S} d="M46 112c-2-36 30-66 76-68 42-2 74 24 76 60v8c-48 6-102 6-152 0Z" />
          <path style={D} d="M46 112c50 6 104 6 152 0v8c-48 6-104 6-152 0Z" />
          <ellipse style={D} cx="100" cy="66" rx="10" ry="6" />
          <ellipse style={D} cx="138" cy="62" rx="10" ry="6" />
          <rect style={D} x="186" y="92" width="10" height="12" rx="3" />
          <rect style={D} x="50" y="96" width="10" height="12" rx="3" />
          <path {...line} strokeWidth={2.5} d="M100 124l18 34 22-34" />
        </>
      );
    case "kayak":
      return (
        <>
          <path style={S} d="M42 110c-2-38 32-70 80-72 44-2 76 26 78 62l4 6c-4 6-14 8-24 6l-138 4Z" />
          <path style={D} d="M88 108c0-12 12-18 26-16 14 2 20 14 18 28-2 12-14 18-26 16-12-2-18-14-18-28Z" />
          <circle fill="var(--bg, #F7F5F0)" cx="104" cy="112" r="3" />
          <circle fill="var(--bg, #F7F5F0)" cx="116" cy="118" r="3" />
          <circle fill="var(--bg, #F7F5F0)" cx="112" cy="104" r="3" />
          <circle style={D} cx="96" cy="60" r="5" />
          <circle style={D} cx="122" cy="54" r="5" />
          <circle style={D} cx="148" cy="58" r="5" />
          <path style={D} d="M180 104l40 6-6 6-32-4Z" />
          <path {...line} strokeWidth={2.5} d="M100 132l12 26 26-40" />
        </>
      );
    case "riding":
      return (
        <>
          <path style={S} d="M44 114c-4-42 30-76 78-78 44-2 76 26 78 64v10c-50 6-104 8-156 4Z" />
          <path style={D} d="M188 96c16 2 34 8 42 18-16 2-32 0-44-4Z" />
          <path {...line} d="M86 50c30-8 64-4 90 14M70 78c36-12 80-10 114 8" strokeWidth={2} />
          <path {...line} strokeWidth={2.5} d="M96 116l16 42 38-40" />
        </>
      );
    case "work":
      return (
        <>
          <path style={S} d="M60 112c-2-42 30-72 72-72 40 0 70 30 68 72Z" />
          <path style={S} d="M34 112h186c6 0 8 6 2 10l-182 2c-10 0-12-10-6-12Z" />
          <path {...line} d="M34 118l188 0" strokeWidth={2} />
          <path {...line} d="M128 42c32 2 58 24 64 62" />
          <path {...line} d="M110 44c-26 8-40 32-40 60" strokeWidth={2} />
          <rect style={D} x="146" y="96" width="22" height="10" rx="3" />
        </>
      );
    default:
      return null;
  }
}

export default function HelmetArt({ kind, className, title }: Props) {
  return (
    <svg
      viewBox="20 20 216 150"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <Shapes kind={kind} />
    </svg>
  );
}
