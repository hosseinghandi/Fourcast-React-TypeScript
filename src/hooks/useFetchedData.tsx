import useLocationData from "./useLocationData";
import useWeatherData from "./useWeatherData";
import useUserCoord from "./useUserCoord";

export function useFetchedData() {
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
