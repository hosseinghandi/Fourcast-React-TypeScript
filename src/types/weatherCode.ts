export type WeatherCondition = {
  description: string;
  category: string;
};

export type DayNightMap = {
  0: WeatherCondition; // night
  1: WeatherCondition; // day
};

export type WeatherCodes = {
  [code: number]: DayNightMap;
};
