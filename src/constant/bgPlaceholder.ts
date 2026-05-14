import type { BGPlaceholderType } from "../types/weatherCode";

export const bgPlaceholder: Record<BGPlaceholderType, string> = {
  clear: "#5B9EC9",
  clear_night: "#19100c",

  cloudy: "#6B7F82",
  cloudy_night: "#080D0A",

  fogy: "#8B9EA8",
  fogy_night: "#779b87",

  rainy: "#2D4A2D",
  rainy_night: "#1A1520",

  snowy: "#C8CDD0",
  snowy_night: "#0A0A0A",

  thunderstorm: "#2A2D3A",
  thunderstorm_night: "#0d0d0e",
};
