import { weatherCodes } from "../data/weatherCode";

export const getWeatherCode = (code: number, isDay: 0 | 1) =>
  weatherCodes[code]?.[isDay];
