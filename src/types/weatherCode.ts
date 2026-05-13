export type BGPlaceholderType =
  | "clear"
  | "clear_night"
  | "cloudy"
  | "cloudy_night"
  | "fogy"
  | "fogy_night"
  | "rainy"
  | "rainy_night"
  | "snowy"
  | "snowy_night"
  | "thunderstorm"
  | "thunderstorm_night";

export type WeatherCondition = {
  description: string;
  category: BGPlaceholderType;
};

export type DayNightMap = {
  0: WeatherCondition; // night
  1: WeatherCondition; // day
};

export type WeatherCodes = {
  [code: number]: DayNightMap;
};
