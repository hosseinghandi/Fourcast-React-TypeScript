import type { Coord } from "../types/fetching";

const weatherDataApi = async (coord: Coord) => {
  const endpoint: string = [
    "&daily=visibility_min,pressure_msl_mean,visibility_mean,precipitation_probability_mean,relative_humidity_2m_mean,weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,showers_sum",
    "snowfall_sum,precipitation_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant",
    "shortwave_radiation_sum",
    "&hourly=weather_code,temperature_2m,is_day",
    "&minutely_15,visibility",
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_gusts_10m,wind_direction_10m,wind_speed_10m",
  ].join(",");

  const locationQuery: string = `latitude=${coord.latitude}&longitude=${coord.longitude}`;
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?${locationQuery}${endpoint}`,
  );
  if (!res.ok) throw new Error("Weather data is failed to fecth");
  return res.json();
};

export default weatherDataApi;
