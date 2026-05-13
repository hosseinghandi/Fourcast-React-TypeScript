import type { WeatherResponse, LocationResponse } from "./api";

export type LayoutProps = {
  location: LocationResponse;
  weather: WeatherResponse;
};

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
  time_24h: number[];
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
  nextDays: string[];
};

export type WindData = {
  wind_speed_10m: number;
  wind_gusts_10m: number;
  wind_direction_10m: number;
};
