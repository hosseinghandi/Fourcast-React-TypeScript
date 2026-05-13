import { useQuery } from "@tanstack/react-query";
import type { LocationRequest } from "../types/api";
import locationDataApi from "../services/locationDataApi";

export default function useLocationData({ coord, city }: LocationRequest) {
  return useQuery({
    queryKey: ["locationData", coord, city],
    queryFn: () => locationDataApi({ coord, city }),
    enabled: !!city || !!coord,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
}
