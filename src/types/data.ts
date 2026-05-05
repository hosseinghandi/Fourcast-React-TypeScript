export type WeatherHourlyType = {
  is_day: number[];
  temperature_2m: number[];
  time: string[];
  weather_code: number[];
};

export type WeatherHourly24hType = {
  isDay_24h: number[];
  temp_24h: number[];
  Code_24h: number[];
  time_24h: string[];
};

export type NowDataType = {
  today: string;
  time: number;
};

export type WeatherWeeklyType = {
  temperature_2m_max: number[];
  weather_code: number[];
};
export type WeatherWeekly7DaysType = {
  temp_7d: number[];
  Code_7d: number[];
};
