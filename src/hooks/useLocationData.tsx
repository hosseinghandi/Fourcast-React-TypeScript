import { useQuery } from "@tanstack/react-query";
import { keepPreviousData } from "@tanstack/react-query";
import type { LocationRequest } from "../types/api";
import locationDataApi from "../services/locationDataApi";

export default function useLocationData({ coord, city }: LocationRequest) {
  return useQuery({
    queryKey: ["locationData", coord?.latitude, coord?.longitude, city],
    queryFn: () => locationDataApi({ coord, city }),
    enabled:
      !!city || (!!coord && !isNaN(coord.latitude) && !isNaN(coord.longitude)),
    placeholderData: keepPreviousData,
    // 1 h and then consider it stale
    staleTime: 1000 * 60 * 60,
    //  keep it for one day
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
  });
}
