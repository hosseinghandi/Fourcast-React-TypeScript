import { useQuery } from "@tanstack/react-query";
import useWeatherDataApi from "../services/weatherDataApi";
import type { Coord } from "../types/fetching";

export default function useWeatherData(coord: Coord | null) {
  return useQuery({
    queryKey: ["weatherData", coord],
    queryFn: () => useWeatherDataApi(coord!),
    enabled: !!coord,
  });
}
