import type { BGPlaceholderType } from "../types/weatherCode";

export const bgPlaceholder: Record<BGPlaceholderType, string> = {
  clear: "#4FC3F7",
  clear_night: "#1E3A5F",

  cloudy: "#90A4AE",
  cloudy_night: "#455A64",

  fog: "#B0BEC5",
  fog_night: "#546E7A",

  rainy: "#1565C0",
  rainy_night: "#0D1B2A",

  snowy: "#E3F2FD",
  snowy_night: "#5C6B73",

  thunderstorm: "#512DA8",
  thunderstorm_night: "#1A237E",
};
