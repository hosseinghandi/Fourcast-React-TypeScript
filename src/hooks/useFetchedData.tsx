import useLocationData from "./useLocationData";
import useWeatherData from "./useWeatherData";
import useUserCoord from "./useUserCoord";
import type { FetchedDataStructure } from "../types/hooks";

export function useFetchedData(): FetchedDataStructure {
  const coord = useUserCoord();

  const location = useLocationData(coord.data);
  const weather = useWeatherData(coord.data);

  return {
    coordinate: coord.data,
    location: location.data,
    weather: weather.data,
    loading: coord.loading || location.isLoading || weather.isLoading,
    error: coord.error || location.error || weather.error,
  };
}
