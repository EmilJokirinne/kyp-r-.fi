import type { CSSProperties } from "react";

/** Kuvitusten väriteemat. Käytetään style-attribuuttina kuvituksen kehyksessä. */
export const artTones = {
  light: { "--shell": "#1D2024", "--detail": "#8C9097", "--glass": "#173B5C", "--bg": "#ECEAE4" },
  fjord: { "--shell": "#173B5C", "--detail": "#8FB0CC", "--glass": "#0F2A43", "--bg": "#DCE6EF" },
  dark: { "--shell": "#F1EEE7", "--detail": "#9AA3AD", "--glass": "#1E3A5F", "--bg": "#15171A" },
  paper: { "--shell": "#2A2E33", "--detail": "#A3A6AB", "--glass": "#E0612A", "--bg": "#F7F5F0" },
} satisfies Record<string, Record<string, string>>;

export type ArtTone = keyof typeof artTones;

export const toneStyle = (tone: ArtTone) => artTones[tone] as CSSProperties;
