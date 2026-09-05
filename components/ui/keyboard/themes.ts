import {
  KEYCODE,
  type KeyboardThemeDefinition,
  type KeyboardThemeName,
  type KeyVariantSlot,
} from "./types";

export const DEFAULT_KEY_VARIANT_SLOT: KeyVariantSlot = "light";

export const CLASSIC_DARK_KEYS: KEYCODE[] = [
  KEYCODE.F5,
  KEYCODE.F6,
  KEYCODE.F7,
  KEYCODE.F8,
  KEYCODE.F9,
  KEYCODE.F13,
  KEYCODE.Delete,
  KEYCODE.F14,
  KEYCODE.Backspace,
  KEYCODE.PageUp,
  KEYCODE.Tab,
  KEYCODE.Backslash,
  KEYCODE.PageDown,
  KEYCODE.CapsLock,
  KEYCODE.Enter,
  KEYCODE.Home,
  KEYCODE.ShiftLeft,
  KEYCODE.ShiftRight,
  KEYCODE.End,
  KEYCODE.ControlLeft,
  KEYCODE.AltLeft,
  KEYCODE.MetaLeft,
  KEYCODE.MetaRight,
  KEYCODE.Fn,
  KEYCODE.ControlRight,
];

export const MINT_DARK_KEYS: KEYCODE[] = [
  KEYCODE.F5,
  KEYCODE.F6,
  KEYCODE.F7,
  KEYCODE.F8,
  KEYCODE.F9,
  KEYCODE.F13,
  KEYCODE.Delete,
  KEYCODE.F14,
  KEYCODE.Backspace,
  KEYCODE.PageUp,
  KEYCODE.Tab,
  KEYCODE.PageDown,
  KEYCODE.CapsLock,
  KEYCODE.Home,
  KEYCODE.ShiftLeft,
  KEYCODE.ShiftRight,
  KEYCODE.End,
  KEYCODE.ControlLeft,
  KEYCODE.AltLeft,
  KEYCODE.MetaLeft,
  KEYCODE.MetaRight,
  KEYCODE.Fn,
  KEYCODE.ControlRight,
];

// DEFINE YOUR CUSTOM THEMES HERE
export const KEYBOARD_THEMES: Record<
  KeyboardThemeName,
  KeyboardThemeDefinition
> = {
  classic: {
    variants: {
      accent: { bg: "#1597BB", text: "rgba(255,255,255,0.8)" },
      dark: { bg: "#3368A0", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#EAF2F8", text: "rgba(0,0,0,0.7)" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [KEYCODE.Escape],
      dark: CLASSIC_DARK_KEYS,
    }),
  },
  mint: {
    variants: {
      accent: { bg: "#86C8AC", text: "rgba(255,255,255,0.7)" },
      dark: { bg: "#447B82", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#EEEEEE", text: "#447B82" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [
        KEYCODE.Escape,
        KEYCODE.Enter,
        KEYCODE.ArrowLeft,
        KEYCODE.ArrowRight,
        KEYCODE.ArrowUp,
        KEYCODE.ArrowDown,
      ],
      dark: MINT_DARK_KEYS,
    }),
  },
  scarlet: {
    variants: {
      accent: { bg: "#E1E1E1", text: "#8F4246" },
      dark: { bg: "#D5868A", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#E4D7D7", text: "#8F4246" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [KEYCODE.Escape, KEYCODE.Enter],
      dark: MINT_DARK_KEYS,
    }),
  },
  blush: {
    variants: {
      accent: { bg: "#F76C8A", text: "rgba(255,255,255,0.8)" },
      dark: { bg: "#FFAAB8", text: "rgba(0,0,0,0.6)" },
      light: { bg: "#FDF2F5", text: "rgba(0,0,0,0.7)" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [KEYCODE.Escape, KEYCODE.Enter],
      dark: MINT_DARK_KEYS,
    }),
  },
  daisy: {
    variants: {
      accent: { bg: "#C996CC", text: "rgba(255,255,255,0.8)" },
      dark: { bg: "#9B7EBD", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#F1E8F7", text: "rgba(0,0,0,0.7)" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [
        KEYCODE.Escape,
        KEYCODE.Enter,
        KEYCODE.ArrowLeft,
        KEYCODE.ArrowRight,
        KEYCODE.ArrowUp,
        KEYCODE.ArrowDown,
      ],
      dark: MINT_DARK_KEYS,
    }),
  },
  charcoal: {
    variants: {
      accent: { bg: "#008170", text: "rgba(255,255,255,0.85)" },
      dark: { bg: "#1F150C", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#D9D9D9", text: "rgba(0,0,0,0.7)" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [KEYCODE.Escape, KEYCODE.Enter],
      dark: [...MINT_DARK_KEYS, KEYCODE.Backquote, KEYCODE.Backslash],
    }),
  },
  sunset: {
    variants: {
      accent: { bg: "#FAB12F", text: "rgba(0,0,0,0.7)" },
      dark: { bg: "#C08552", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#FFE8D6", text: "rgba(0,0,0,0.7)" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [KEYCODE.Escape, KEYCODE.Enter],
      dark: MINT_DARK_KEYS,
    }),
  },
  forest: {
    variants: {
      accent: { bg: "#66BB6A", text: "rgba(255,255,255,0.8)" },
      dark: { bg: "#345830", text: "rgba(255,255,255,0.7)" },
      light: { bg: "#E8F5E9", text: "rgba(0,0,0,0.7)" },
    },
    keyVariantOverrides: buildKeyVariantOverrides({
      accent: [
        KEYCODE.Escape,
        KEYCODE.Enter,
        KEYCODE.ArrowLeft,
        KEYCODE.ArrowRight,
        KEYCODE.ArrowUp,
        KEYCODE.ArrowDown,
      ],
      dark: MINT_DARK_KEYS,
    }),
  },
};

export function buildKeyVariantOverrides({
  accent = [],
  dark = [],
  light = [],
}: {
  accent?: KEYCODE[];
  dark?: KEYCODE[];
  light?: KEYCODE[];
}): Partial<Record<KEYCODE, KeyVariantSlot>> {
  const entries: Array<[KEYCODE, KeyVariantSlot]> = [];

  for (const keyCode of accent) {
    entries.push([keyCode, "accent"]);
  }
  for (const keyCode of dark) {
    entries.push([keyCode, "dark"]);
  }
  for (const keyCode of light) {
    entries.push([keyCode, "light"]);
  }

  return Object.fromEntries(entries) as Partial<
    Record<KEYCODE, KeyVariantSlot>
  >;
}

export function resolveKeyVariant(
  themeName: KeyboardThemeName,
  keyCode?: KEYCODE
): KeyVariantSlot {
  if (!keyCode) {
    return DEFAULT_KEY_VARIANT_SLOT;
  }
  return (
    KEYBOARD_THEMES[themeName].keyVariantOverrides[keyCode] ??
    DEFAULT_KEY_VARIANT_SLOT
  );
}

export function toRgba(color: string, alpha: number): string {
  if (!color.startsWith("#")) {
    return color;
  }

  const value = color.slice(1);
  const hex =
    value.length === 3
      ? value
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : value;

  if (hex.length !== 6) {
    return color;
  }

  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}