import type { LocationResponse, LocationRequest } from "../types/api";

const locationDataApi = async ({
  coord,
  city,
}: LocationRequest): Promise<LocationResponse> => {
  if (!coord && !city)
    throw new Error("Either city or coordination is required!");

  const endpoint: string = city
    ? `search?format=json&q=${city}&limit=1`
    : `reverse?format=jsonv2&lat=${coord?.latitude}&lon=${coord?.longitude}`;

  const res = await fetch(`https://nominatim.openstreetmap.org/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch location data");
  const data = await res.json();
  const locationData = city ? data[0] : data;
  if (!locationData) throw new Error(`No result found for '${city}'`);
  return locationData;
};
export default locationDataApi;
