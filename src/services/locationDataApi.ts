import type { Coord, LocationResponse } from "../types/fetching";

const locationDataApi = async (coord: Coord): Promise<LocationResponse> => {
  // To get rid of errors becasue coord should be
  // avaliable to run this function as we safly guarded by enable depend on coord
  if (!coord) throw new Error("Missing coord");
  const endpoint = `reverse?format=jsonv2&lat=${coord.latitude}&lon=${coord.longitude}`;
  const res = await fetch(`https://nominatim.openstreetmap.org/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch location data");
  return res.json();
};
export default locationDataApi;
