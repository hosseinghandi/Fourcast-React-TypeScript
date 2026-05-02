import { useQuery } from "@tanstack/react-query";

import type { Coord } from "../types/fetching";
import locationDataApi from "../services/locationDataApi";

export default function useLocationData(coord: Coord | null) {
  return useQuery({
    queryKey: ["locationData", coord],
    queryFn: () => locationDataApi(coord!),
    enabled: !!coord,
  });
}
