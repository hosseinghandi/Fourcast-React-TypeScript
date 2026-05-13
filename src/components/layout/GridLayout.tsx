import {
  WeatherBanner,
  HourlyForecast,
  WeeklyForecast,
  HumidityCard,
  PressureCard,
  WindCard,
  RainCard,
  VisibilityCard,
  UVCard,
  SunPath,
} from "../../components";
import type { LayoutProps } from "../../types/extraction";

export default function GridLayout({ location, weather }: LayoutProps) {
  return (
    <section
      aria-label="Weather data information"
      className="w-full grid gap-small details-list"
    >
      <section className="banner" aria-label="Current weather information">
        <WeatherBanner location={location} weatherData={weather} />
      </section>
      <section className="hourly" aria-labelledby="Hourly forecast">
        <HourlyForecast {...weather.hourly} />
      </section>
      <section className="uv" aria-labelledby="UV value">
        <UVCard uvValue={weather.daily.uv_index_max} />
      </section>
      <section className="humidity" aria-labelledby="Humidity">
        <HumidityCard humidityValue={weather.daily.relative_humidity_2m_mean} />
      </section>
      <section className="wind" aria-labelledby="Wind">
        <WindCard {...weather.current} />
      </section>
      <section className="pressure" aria-labelledby="Air Pressure">
        <PressureCard pressureValue={weather.daily.pressure_msl_mean} />
      </section>
      <section className="visibility" aria-labelledby="Visibility">
        <VisibilityCard visibilityValue={weather.daily.visibility_mean} />
      </section>
      <section className="rain" aria-labelledby="Rain chance">
        <RainCard rainValue={weather.daily.precipitation_probability_mean} />
      </section>
      <section className="sunpath" aria-labelledby="Sunpath">
        <SunPath {...weather.daily} />
      </section>
      <section className="weekly" aria-labelledby="7-day forecast">
        <WeeklyForecast {...weather.daily} />
      </section>
    </section>
  );
}
