import type { LocationResponse, WeatherResponse } from "../../types/fetching";
import weatherCodeList from "../../data/weatherCodeList.json";

type WeatherBannerProps = {
  name: LocationResponse["display_name"] | LocationResponse["name"];
  weatherData: WeatherResponse;
};
type WeatherInfo = {
  description: string;
  category: string;
};

export default function WeatherBanner({
  name,
  weatherData,
}: WeatherBannerProps) {
  const { current, daily } = weatherData;
  const { apparent_temperature, weather_code, is_day } = current;
  const { temperature_2m_min, temperature_2m_max } = daily;
  // const weatherSituation: WeatherInfo = weatherCodeList[weather_code][is_day];

  return (
    <>
      <h1 className="text-4xl">{name}</h1>
      <h1 className="text-4xl">{apparent_temperature}</h1>
      <h1 className="text-4xl">{temperature_2m_min[0]}</h1>
      <h1 className="text-4xl">{temperature_2m_max[0]}</h1>
    </>
  );
}
