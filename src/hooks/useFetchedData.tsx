import useLocationData from "./useLocationData";
import useWeatherData from "./useWeatherData";
import useUserCoord from "./useUserCoord";
import type { FetchedDataStructure } from "../types/hooks";
import type { Coord } from "../types/api";

export function useFetchedData(city: string | undefined): FetchedDataStructure {
  const coord = useUserCoord();

  const location = useLocationData({ coord: coord.data, city: city });

  const exactCoord: Coord = city
    ? {
        latitude: Number(location.data?.lat),
        longitude: Number(location.data?.lat),
      }
    : coord.data;
  const weather = useWeatherData(exactCoord);

  return {
    coordinate: coord.data,
    location: location.data,
    weather: weather.data,
    loading: coord.isLoading || location.isLoading || weather.isLoading,
    error:
      coord.error ||
      (location.error as Error | null) ||
      (weather.error as Error | null),
  };
}
