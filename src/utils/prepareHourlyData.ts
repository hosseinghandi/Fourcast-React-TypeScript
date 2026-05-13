import type {
  WeatherHourlyType,
  WeatherHourly24hType,
  NowDataType,
} from "../types/extraction";
import getCurrentTime from "./getCurrentTime";
import find24hData from "./find24hData";
export default function prepareHourlyData({
  is_day,
  temperature_2m,
  weather_code,
  time,
}: WeatherHourlyType): WeatherHourly24hType {
  const now: NowDataType = getCurrentTime();

  return {
    isDay_24h: find24hData(is_day, now.time),
    temp_24h: find24hData(temperature_2m, now.time),
    code_24h: find24hData(weather_code, now.time),
    time_24h: find24hData(time, now.time).map((t: string): number =>
      Number(t.split("T")[1].split(":")[0]),
    ),
  };
}
