export type Coord = { latitude: number; longitude: number } | null;

export type locationRequest = {
  coord?: Coord;
  city: string;
};

export type LocationResponse = {
  lat: string;
  lon: string;
  address: {
    road: string;
    city: string;
  };
};

export type WeatherResponse = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    is_day: number;
    wind_speed_10m: number;
    wind_gusts_10m: number;
    wind_direction_10m: number;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    is_day: number[];
  };

  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    relative_humidity_2m_mean: number[];
    visibility_mean: number[];
    pressure_msl_mean: number[];
    precipitation_probability_mean: number[];
  };
};
