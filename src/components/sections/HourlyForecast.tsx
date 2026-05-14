import type { WeatherHourlyType } from "../../types/extraction";
import pickWeatherIcon from "../../utils/pickWeatherIcon";
import prepareHourlyData from "../../utils/prepareHourlyData";
import { CardTitle, Card } from "..";
import iconList from "../../constant/iconList";

type props = WeatherHourlyType;

export default function HourlyForecast({
  is_day,
  temperature_2m,
  weather_code,
  time,
}: props) {
  const { isDay_24h, temp_24h, code_24h, time_24h } = prepareHourlyData({
    is_day,
    temperature_2m,
    weather_code,
    time,
  });

  const dayH = isDay_24h.map((_, i) => i);

  return (
    <Card>
      <div className="flex flex-row w-full justify-between ">
        <CardTitle title={"Hourly forecast"} underline={true} />
        <iconList.Arrow
          aria-hidden="true"
          className="min-md:hidden size-icon-secondary animate-pulse"
        />
      </div>
      <ul
        aria-label="24 hours weather forecast"
        className=" flex flex-row 
            gap-medium md:flex-wrap md:flex-grow
            overflow-x-scroll no-scrollbar 
            [&>*:nth-child(n+13)]:md:border-t [&>*:nth-child(n+13)]:md:border-foreground-mate"
      >
        {dayH.map((h, i) => {
          const { cat, path } = pickWeatherIcon(
            code_24h[h],
            isDay_24h[h] ? 1 : 0,
          );
          return (
            <li
              key={h}
              className="flex flex-col items-center 
                justify-between gap-small w-fit 
                md:shrink md:grow 
                md:basis-[calc(8.3333%-var(--spacing-medium))]"
            >
              <p className="text-secondary" aria-hidden="true">
                {i === 0 ? "Now" : time_24h[h]}
              </p>
              <span className="sr-only">
                {i === 0
                  ? "Now"
                  : `${
                      time_24h[h] >= 12
                        ? `${time_24h[h] - 12 || 12} PM`
                        : `${time_24h[h]} AM`
                    }`}
              </span>
              <img
                aria-hidden="true"
                src={path}
                alt=""
                className="size-icon-primary object-contain"
              />
              <span className="sr-only">{cat}</span>
              <p className="text-primary font-bold">
                {`${temp_24h[h].toFixed(0)}`}
                <span aria-hidden="true">°</span>
                <span className="sr-only">degrees</span>
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
