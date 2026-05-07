import { weatherCodes } from "../data/weatherCode";
import type { WeatherCondition } from "../types/weatherCode";
export const getWeatherCode = (code: number, isDay: 0 | 1): WeatherCondition =>
  weatherCodes[code]?.[isDay];
