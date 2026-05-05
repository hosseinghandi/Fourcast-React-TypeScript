import type { WeatherWeeklyType } from "../../types/data";
type Props = WeatherWeeklyType;

export default function WeeklyForecast({
  temperature_2m_max,
  weather_code,
}: Props) {
  const weekDays: number[] = temperature_2m_max.map((_, i) => i);

  return (
    <>
      <h1>daily</h1>
      <div className="flex flex-row gap-4">
        {weekDays.map((d) => (
          <div key={d} className="flex flex-col">
            <p>{temperature_2m_max[d] ?? "_"}</p>
            <p>{weather_code[d] ?? "_"}</p>
          </div>
        ))}
      </div>
    </>
  );
}
