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
      <main
        className="flex flex-col items-center min-h-screen bg-gray-200
      justify-center w-full border-1 px-large gap-large"
      >
        <VideoBackground {...weather.current} />
        <WeatherBanner
          name={location.address.road ?? location.address.city}
          weatherData={weather}
        />
        <HourlyForecast {...weather.hourly} />
        <WeeklyForecast {...weather.daily} />
        <HumidityCard humidityValue={weather.daily.relative_humidity_2m_mean} />
        <PressureCard pressureValue={weather.daily.pressure_msl_mean} />
        <RainCard rainValue={weather.daily.precipitation_probability_mean} />
        <VisibilityCard visibilityValue={weather.daily.visibility_mean} />
        <UVCard uvValue={weather.daily.uv_index_max} />
        <WindCard {...weather.current} />
        <SunPath {...weather.daily} />
      </main>

      <footer></footer>
    </>
  );
}
