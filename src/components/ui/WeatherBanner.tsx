import type { LocationResponse, WeatherResponse } from "../../types/fetching";
import type { WeatherCondition } from "../../data/weatherCode";
import { getWeatherCode } from "../../utils/getWeatherCode";

type WeatherBannerProps = {
  name: LocationResponse["display_name"] | LocationResponse["name"];
  weatherData: WeatherResponse;
};

export default function WeatherBanner({
  name,
  weatherData,
}: WeatherBannerProps) {
  // data preparation

  const { current, daily } = weatherData;
  const { apparent_temperature, weather_code, is_day } = current;
  const { temperature_2m_min, temperature_2m_max } = daily;
  const weatherCondiation: WeatherCondition = getWeatherCode(
    weather_code,
    is_day ? 1 : 0,
  );

  return (
    <>
      <h1>weathr banner</h1>
      <div className="flex flex-row gap-4">
        <h1>{name}</h1>
        <h1>{apparent_temperature}</h1>
        <h1>{temperature_2m_min[0]}</h1>
        <h1>{temperature_2m_max[0]}</h1>
        <h1>{weatherCondiation.category}</h1>
        <h1>{weatherCondiation.description}</h1>
      </div>
    </>
  );
}
