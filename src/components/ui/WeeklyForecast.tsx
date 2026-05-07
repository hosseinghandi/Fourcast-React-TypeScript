import type { WeatherWeeklyType } from "../../types/extraction";
import getCurrentTime from "../../utils/getCurrentTime";
import pickWeatherIcon from "../../utils/pickWeatherIcon";
import { Card, CardTitle } from "../../components";
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
      <section className="flex flex-row gap-4 overflow-x-auto no-scrollbar">
        {weekDays.map((d, i) => {
          const { cat, path } = pickWeatherIcon(weather_code[d], 1);
          return (
            <div
              key={d}
              className="flex flex-col items-center 
              w-fit justify-between gap-small shrink-0"
            >
              <p className="text-secondary">{nextDays[i]}</p>
              <img
                src={path}
                alt={`Icon of ${cat} condition`}
                className="size-icon-primary object-contain"
              />
              <p className="text-primary">{temperature_2m_max[d].toFixed(0)}</p>
            </div>
          );
        })}
      </section>
    </Card>
  );
}
