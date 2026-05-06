import type { WeatherResponse } from "./api";

export type WeatherHourlyType = WeatherResponse["hourly"];

export type WeatherWeeklyType = Pick<
  WeatherResponse["daily"],
  "temperature_2m_max" | "weather_code"
>;

// 24h slice after processing
export type WeatherHourly24hType = {
  isDay_24h: number[];
  temp_24h: number[];
  code_24h: number[];
  time_24h: string[];
};

// 7 day slice after processing
export type WeatherWeekly7DaysType = {
  temp_7d: number[];
  code_7d: number[];
};

// current time snapshot
export type NowDataType = {
  today: string;
  time: number;
};
