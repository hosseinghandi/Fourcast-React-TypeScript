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
  console.log(weather);

  return (
    <>
      <Header />
      <main>
        <WeatherBanner
          name={location.name ?? location.display_name}
          weatherData={weather}
        />

        <section>
          <HourlyForecast />
          <WeeklyForecast />
        </section>

        <section>
          <HumidityCard />
          <PressureCard />
          <WindCard />
        </section>

        <section>
          <RainCard />
          <VisibilityCard />
          <UVCard />
        </section>

        <section>
          <SunPath />
        </section>

        <VideoBackground />
      </main>

      <footer>{/* add footer content later */}</footer>
    </>
  );
}
