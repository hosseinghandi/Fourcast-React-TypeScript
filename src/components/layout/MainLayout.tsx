import {
  Header,
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
  VideoBackground,
} from "../../components";
import type { LocationResponse, WeatherResponse } from "../../types/fetching";

type MainLayoutProps = {
  location: LocationResponse;
  weather: WeatherResponse;
};

export function MainLayout({ location, weather }: MainLayoutProps) {
  console.log(weather.daily);
  return (
    <>
      <Header />
      <main>
        <VideoBackground {...weather.current} />
        <div className="border-b-1">
          <WeatherBanner
            name={location.name ?? location.display_name}
            weatherData={weather}
          />
        </div>
        <div className="border-b-1">
          <HourlyForecast {...weather.hourly} />
        </div>
        <div className="border-b-1">
          <WeeklyForecast {...weather.daily} />
        </div>

        <HumidityCard humidityValue={weather.daily.relative_humidity_2m_mean} />
        <PressureCard pressureValue={weather.daily.pressure_msl_mean} />
        <WindCard {...weather.current} />

        <RainCard rainValue={weather.daily.precipitation_probability_mean} />
        <VisibilityCard visibilityValue={weather.daily.visibility_mean} />
        <UVCard uvValue={weather.daily.uv_index_max} />
        <SunPath {...weather.daily} />
      </main>

      <footer>{/* add footer content later */}</footer>
    </>
  );
}
