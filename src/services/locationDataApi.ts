import type { Coord, LocationResponse } from "../types/api";

const locationDataApi = async (
  loctionBy: Coord | string,
): Promise<LocationResponse> => {
  if (!loctionBy) throw new Error("Either city or coordination is required!");

  const endpoint: string =
    typeof loctionBy === "string"
      ? `search?format=json&q=${loctionBy}&limit=1`
      : `reverse?format=jsonv2&lat=${loctionBy?.latitude}&lon=${loctionBy?.longitude}`;

  const res = await fetch(`https://nominatim.openstreetmap.org/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch location data");
  return res.json();
};
export default locationDataApi;
