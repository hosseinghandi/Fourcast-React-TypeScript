import { useQuery } from "@tanstack/react-query";
import weatherDataApi from "../services/weatherDataApi";
import type { Coord } from "../types/api";

export default function useWeatherData(coord: Coord | null) {
  return useQuery({
    queryKey: ["weatherData", coord?.latitude, coord?.longitude],
    enabled: !!coord,
    queryFn: () => weatherDataApi(coord),
  });
}
