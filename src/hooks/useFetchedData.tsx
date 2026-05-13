import useLocationData from "./useLocationData";
import useWeatherData from "./useWeatherData";
import useUserCoord from "./useUserCoord";
import { useMemo } from "react";
import type { FetchedDataStructure } from "../types/hooks";
import type { Coord } from "../types/api";

export function useFetchedData(city: string | undefined): FetchedDataStructure {
  const coord = useUserCoord();
  const location = useLocationData({ coord: coord.data, city: city });

  // FINAL WEATHER COORDS
  const finalCoord: Coord | undefined = useMemo(() => {
    // user searched city
    if (city) {
      if (!location.data) return undefined;

      return {
        latitude: Number(location.data.lat),
        longitude: Number(location.data.lon),
      };
    }

    // otherwise use user geolocation directly
    return coord.data;
  }, [city, location.data, coord.data]);

  const weather = useWeatherData(finalCoord);

  return {
    coordinate: coord.data,
    location: location.data,
    weather: weather.data,
    loading:
      coord.isLoading ||
      (city ? location.isLoading : false) ||
      weather.isLoading,
    error: {
      coord: coord.error,
      location: city ? (location.error as Error | null) : null,
      weather: weather.error as Error | null,
    },
  };
}
