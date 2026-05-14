import useLocationData from "./useLocationData";
import useWeatherData from "./useWeatherData";
import useUserCoord from "./useUserCoord";
import { useMemo } from "react";
import type { FetchedDataStructure } from "../types/hooks";
import type { Coord } from "../types/api";

export function useFetchedData(city: string | undefined): FetchedDataStructure {
  const coord = useUserCoord();
  const location = useLocationData({ coord: coord.data, city: city });

  const finalCoord: Coord | undefined = useMemo(() => {
    if (city) {
      if (!location.data) return undefined;
      return {
        latitude: Number(location.data.lat),
        longitude: Number(location.data.lon),
      };
    }
    return coord.data;
  }, [city, location.data, coord.data]);

  const weather = useWeatherData(finalCoord);

  return {
    coordinate: coord.data,
    location: location.data,
    weather: weather.data,
    isLocationPlaceholder: location.isPlaceholderData,
    loading: coord.isLoading || location.isLoading || weather.isLoading,
    error: {
      coord: coord.error as Error | null,
      location: location.error as Error | null,
      weather: weather.error as Error | null,
    },
  };
}
