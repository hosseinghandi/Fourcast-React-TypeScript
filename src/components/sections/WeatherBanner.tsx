import type { LocationResponse, WeatherResponse } from "../../types/api";
import type { WeatherCondition } from "../../types/weatherCode";
import { getWeatherCode } from "../../utils/getWeatherCode";
import iconList from "../../constant/iconList";

type WeatherBannerProps = {
  location: LocationResponse;
  weatherData: WeatherResponse;
};

export default function WeatherBanner({
  location,
  weatherData,
}: WeatherBannerProps) {
  // data preparation

  const { current, daily } = weatherData;
  const { apparent_temperature, weather_code } = current;
  const { temperature_2m_min, temperature_2m_max } = daily;
  const weatherCondiation: WeatherCondition = getWeatherCode(weather_code, 1);

  const displayName =
    location?.name ??
    location?.address?.city ??
    location?.address?.town ??
    "Unknown location";

  return (
    <>
      <div
        className="flex flex-col gap-small justify-center items-center 
      mt-large h-full lg:justify-end max-lg:mb-large lg:pb-large"
      >
        <h1 className="text-temp-current font-bold leading-60">
          {`${apparent_temperature.toFixed(0)}`}
          <span aria-hidden="true">°</span>
          <span className="sr-only">degrees</span>
        </h1>
        <div
          className="
        flex flex-row justify-between w-4/5
        md:w-1/2 lg:w-4/5
        border-b-1 border-foreground-mate"
        >
          <p>
            <span className="sr-only">High temperature</span>
            <span aria-hidden="true">H</span>
            {`${temperature_2m_max[0]}`}
            <span aria-hidden="true">°</span>
            <span className="sr-only">degrees</span>
          </p>

          <p>
            <span className="sr-only">Low temperature</span>
            <span aria-hidden="true">L</span>
            {` ${temperature_2m_min[0]}`}
            <span aria-hidden="true">°</span>
            <span className="sr-only">degrees</span>
          </p>
        </div>
        <p className="text-temp-state font-bold">
          {weatherCondiation.category}
        </p>
        <div className="flex flex-row gap-tight items-center">
          <iconList.Location
            aria-hidden="true"
            className="size-icon-small dark:text-foreground"
          />
          <p>{displayName}</p>
        </div>
      </div>
    </>
  );
}
