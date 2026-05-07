import type { WeatherHourlyType } from "../../types/extraction";
import pickWeatherIcon from "../../utils/pickWeatherIcon";
import prepareHourlyData from "../../utils/prepareHourlyData";
import { CardTitle, Card } from "../../components";

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
  const dayH: number[] = isDay_24h.map((_: any, i: number): number => i);
  return (
    <>
      <Card>
        <CardTitle title={"Hourly forecast"} underline={true} />
        <section className="flex flex-row gap-4 overflow-x-auto no-scrollbar">
          {dayH.map((h, i) => {
            const { cat, path } = pickWeatherIcon(Code_24h[h], isDay_24h[h]);
            return (
              <div
                key={h}
                className="flex flex-col items-center 
              w-fit justify-between gap-small shrink-0"
              >
                <p className="text-secondary">
                  {i === 0 ? "now" : time_24h[h]}
                </p>
                <img
                  src={path}
                  alt={`Icon of ${cat} condition`}
                  className="size-icon-primary object-contain"
                />
                <p className="text-primary">{temp_24h[h].toFixed(0)}</p>
              </div>
            );
          })}
        </section>
      </Card>
    </>
  );
}
