import type { KeyboardThemeName } from "@/components/ui/keyboard";

export const THEME_OPTIONS: {
  id: KeyboardThemeName;
  label: string;
  colors: [string, string, string]; // [light, dark, accent]
}[] = [
  {
    id: "classic",
    label: "Classic",
    colors: ["#EAF2F8", "#3368A0", "#1597BB"],
  },
  { id: "mint", label: "Mint", colors: ["#EEEEEE", "#447B82", "#86C8AC"] },
  {
    id: "scarlet",
    label: "Scarlet",
    colors: ["#E4D7D7", "#D5868A", "#E1E1E1"],
  },
  {
    id: "blush",
    label: "Blush",
    colors: ["#FDF2F5", "#FFAAB8", "#F76C8A"],
  },
  {
    id: "daisy",
    label: "Daisy",
    colors: ["#F1E8F7", "#9B7EBD", "#C996CC"],
  },
  {
    id: "charcoal",
    label: "Charcoal",
    colors: ["#D9D9D9", "#1F150C", "#008170"],
  },
  {
    id: "sunset",
    label: "Sunset",
    colors: ["#FFE8D6", "#C08552", "#FAB12F"],
  },
  {
    id: "forest",
    label: "Forest",
    colors: ["#E8F5E9", "#345830", "#66BB6A"],
  },
];