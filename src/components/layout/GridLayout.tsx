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
    <div className="w-full grid gap-small details-list">
      <section className="banner">
        <WeatherBanner location={location} weatherData={weather} />
      </section>
      <section className="hourly">
        <HourlyForecast {...weather.hourly} />
      </section>
      <section className="uv">
        <UVCard uvValue={weather.daily.uv_index_max} />
      </section>
      <section className="humidity">
        <HumidityCard humidityValue={weather.daily.relative_humidity_2m_mean} />
      </section>
      <section className="wind">
        <WindCard {...weather.current} />
      </section>
      <section className="pressure">
        <PressureCard pressureValue={weather.daily.pressure_msl_mean} />
      </section>
      <section className="visibility">
        <VisibilityCard visibilityValue={weather.daily.visibility_mean} />
      </section>
      <section className="rain">
        <RainCard rainValue={weather.daily.precipitation_probability_mean} />
      </section>
      <section className="sunpath">
        <SunPath {...weather.daily} />
      </section>
      <section className="weekly">
        <WeeklyForecast {...weather.daily} />
      </section>
    </div>
  );
}
