import { useQuery } from "@tanstack/react-query";
import weatherDataApi from "../services/weatherDataApi";
import type { Coord } from "../types/api";

export default function useWeatherData(coord: Coord | undefined) {
  return useQuery({
    queryKey: ["weatherData", coord?.latitude, coord?.longitude],
    enabled: !!coord && !isNaN(coord.latitude) && !isNaN(coord.longitude),
    staleTime: 1000 * 60 * 10, // 10 min cache
    gcTime: 1000 * 60 * 30,
    retry: 1,
    queryFn: () => weatherDataApi(coord!),
  });
}
