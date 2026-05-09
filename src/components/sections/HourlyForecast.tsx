import type { WeatherHourlyType } from "../../types/extraction";
import pickWeatherIcon from "../../utils/pickWeatherIcon";
import prepareHourlyData from "../../utils/prepareHourlyData";
import { CardTitle, Card } from "..";

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
        <div
          className=" flex flex-row
            gap-medium flex-nowrap md:flex-wrap flex-grow
            overflow-x-auto no-scrollbar 
            [&>*:nth-child(n+13)]:md:border-t"
        >
          {/*  */}
          {dayH.map((h, i) => {
            const { cat, path } = pickWeatherIcon(Code_24h[h], isDay_24h[h]);
            return (
              <div
                key={h}
                className="flex flex-col items-center 
                justify-between gap-small w-fit 
                md:shrink md:grow 
                md:basis-[calc(8.3333%-var(--spacing-medium))]"
              >
                <p className="text-secondary">
                  {i === 0 ? "now" : time_24h[h]}
                </p>
                <img
                  src={path}
                  alt={`Icon of ${cat} condition`}
                  className="size-icon-primary object-contain"
                />
                <p className="text-primary font-bold">
                  {`${temp_24h[h].toFixed(0)}°`}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}
