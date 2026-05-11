import { useQuery } from "@tanstack/react-query";

import type { Coord } from "../types/api";
import locationDataApi from "../services/locationDataApi";

export default function useLocationData(loctionBy: Coord | string) {
  return useQuery({
    queryKey: ["locationData", loctionBy],
    queryFn: () => locationDataApi(loctionBy),
    enabled: !!loctionBy,
  });
}
