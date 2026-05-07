import type { LocationResponse, WeatherResponse } from "../../types/api";
import type { WeatherCondition } from "../../types/weatherCode";
import { getWeatherCode } from "../../utils/getWeatherCode";
import iconList from "../../constant/iconList";

type WeatherBannerProps = {
  name:
    | LocationResponse["address"]["city"]
    | LocationResponse["address"]["road"];
  weatherData: WeatherResponse;
};

export default function WeatherBanner({
  name,
  weatherData,
}: WeatherBannerProps) {
  // data preparation

  const { current, daily } = weatherData;
  const { apparent_temperature, weather_code, is_day } = current;
  const { temperature_2m_min, temperature_2m_max } = daily;
  const weatherCondiation: WeatherCondition = getWeatherCode(
    weather_code,
    is_day ? 1 : 0,
  );

  return (
    <>
      <div
        className="flex flex-col gap-small 
      w-fit justify-center items-center mt-large"
      >
        <h1
          aria-label="Current temperature"
          className="text-temp-current font-bold leading-30"
        >
          {`${apparent_temperature.toFixed(0)} °`}
        </h1>
        <div
          className="
        flex flex-row justify-between w-4/5
        border-b-1 border-foreground-mate"
        >
          <p aria-label="The highest temperature of the day">{`H${temperature_2m_max[0]}`}</p>
          <p aria-label="The lowest temperature of the day">{`L${temperature_2m_min[0]}`}</p>
        </div>
        <p
          aria-label="Current weather condition"
          className="text-temp-state font-bold"
        >
          {weatherCondiation.category}
        </p>
        {/* <p className="text-temp-state-desc">{weatherCondiation.description}</p> */}
        <div className="flex flex-row gap-tight items-center">
          <iconList.Location
            aria-hidden="true"
            className="size-icon-small dark:text-foreground"
          />
          <p aria-label="Current location">{name}</p>
        </div>
      </div>
    </>
  );
}
