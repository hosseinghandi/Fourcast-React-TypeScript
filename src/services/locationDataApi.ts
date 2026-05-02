import type { Coord } from "../types/fetching";

const locationDataApi = async (coord: Coord) => {
  const endpoint = `reverse?format=jsonv2&lat=${coord.latitude}&lon=${coord.longitude}`;
  const res = await fetch(`https://nominatim.openstreetmap.org/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch location data");
  return res.json();
};
export default locationDataApi;
