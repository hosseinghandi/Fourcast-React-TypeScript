import { useQuery } from "@tanstack/react-query";
import weatherDataApi from "../services/weatherDataApi";
import type { Coord } from "../types/api";
import { keepPreviousData } from "@tanstack/react-query";
export default function useWeatherData(coord: Coord | undefined) {
  return useQuery({
    queryKey: ["weatherData", coord?.latitude, coord?.longitude],
    enabled: !!coord && !isNaN(coord.latitude) && !isNaN(coord.longitude),
    placeholderData: keepPreviousData,
    // 10 min and then consider it stale
    staleTime: 1000 * 60 * 10,
    //  keep it for 30 min
    gcTime: 1000 * 60 * 30,
    retry: 1,
    queryFn: () => weatherDataApi(coord!),
  });
}
