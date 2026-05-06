import type React from "react";
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
import type { LocationResponse, WeatherResponse } from "../../types/api";

type MainLayoutProps = {
  location: LocationResponse;
  weather: WeatherResponse;
};

export function MainLayout({ location, weather }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        {/* <VideoBackground {...weather.current} /> */}
        <WeatherBanner
          name={location.name ?? location.display_name}
          weatherData={weather}
        />
        {/* <div className="border-b-1">
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
        <SunPath {...weather.daily} /> */}
      </main>

      <footer></footer>
    </>
  );
}
