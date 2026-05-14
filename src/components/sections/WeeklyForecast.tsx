import type { WeatherWeeklyType } from "../../types/extraction";
import getCurrentTime from "../../utils/getCurrentTime";
import pickWeatherIcon from "../../utils/pickWeatherIcon";
import { Card, CardTitle } from "..";
type Props = WeatherWeeklyType;

export default function WeeklyForecast({
  temperature_2m_max,
  weather_code,
}: Props) {
  const weekDays: number[] = temperature_2m_max.map((_, i) => i);
  const { nextDays } = getCurrentTime();
  return (
    <Card>
      <CardTitle title={"7-day forecast"} underline={true} />
      <ul
        aria-label="7 day weather forecast"
        className="mt-small flex flex-row 
        w-full justify-between gap-small "
      >
        {weekDays.map((d, i) => {
          const { cat, path } = pickWeatherIcon(weather_code[d], 1);
          return (
            <li
              key={d}
              className="flex flex-col items-center 
              w-fit justify-between gap-small shrink-0"
            >
              <p className="text-secondary" aria-hidden="true">
                {nextDays[i].slice(0, 3)}
              </p>
              <span className="sr-only">{nextDays[i]}</span>
              <img
                aria-hidden="true"
                src={path}
                alt=""
                className="size-icon-primary object-contain"
              />
              <span className="sr-only">{cat}</span>
              <p className="text-primary font-bold">
                {`${temperature_2m_max[d].toFixed(0)}`}
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
