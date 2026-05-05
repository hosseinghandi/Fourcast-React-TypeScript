import type { WeatherHourlyType } from "../../types/data";
import prepareHourlyData from "../../utils/prepareHourlyData";
type props = WeatherHourlyType;

export default function HourlyForecast({
  is_day,
  temperature_2m,
  weather_code,
  time,
}: props) {
  const { isDay_24h, temp_24h, Code_24h, time_24h } = prepareHourlyData({
    is_day,
    temperature_2m,
    weather_code,
    time,
  });
  const dayH: number[] = isDay_24h.map((_, i) => i);
  return (
    <>
      <h1>HourlyForecast</h1>
      <div className="flex flex-row gap-4">
        {dayH.map((h) => (
          <div key={h} className="flex flex-col">
            <p>{time_24h[h]}</p>
            <p>{temp_24h[h]}</p>
            <p>{isDay_24h[h]}</p>
            <p>{Code_24h[h]}</p>
          </div>
        ))}
      </div>
    </>
  );
}
