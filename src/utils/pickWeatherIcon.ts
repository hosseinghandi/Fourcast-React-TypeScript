import { getWeatherCode } from "./getWeatherCode";
export const pickWeatherIcon = (
  Code: number,
  isDay: 1 | 0,
): { cat: string; path: string } => {
  const cat = getWeatherCode(Code, isDay).category;
  return {
    cat: cat,
    path: `/icons/weather-cond/${cat}.png`,
  };
};
export default pickWeatherIcon;
