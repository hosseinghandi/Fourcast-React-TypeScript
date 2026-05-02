import useLocationData from "./useLocationData";
import useWeatherData from "./useWeatherData";
import useUserCoord from "./useUserCoord";

export function useFetchedData() {
  const coord = useUserCoord();

  const loaction = useLocationData(coord.data);
  const weather = useWeatherData(coord.data);

  return {
    coordinate: coord.data,
    location: loaction.data,
    weather: weather.data,
    loading: coord.loading || loaction.isLoading || weather.isLoading,
    error: coord.error || loaction.error || weather.error,
  };
}
