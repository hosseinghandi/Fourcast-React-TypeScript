import type { LocationResponse, LocationRequest } from "../types/api";
const BASE_URL = "https://nominatim.openstreetmap.org";

const locationDataApi = async ({
  coord,
  city,
}: LocationRequest): Promise<LocationResponse> => {
  if (!coord && !city)
    throw new Error("Either city or coordination is required!");

  if (city) {
    const res = await fetch(
      `${BASE_URL}/search?format=json&q=${encodeURIComponent(city)}&limit=1`,
    );
    const data = await res.json();
    if (res.ok && data[0]) return data[0];
  }

  if (coord) {
    const res = await fetch(
      `${BASE_URL}/reverse?format=jsonv2&lat=${coord?.latitude}&lon=${coord?.longitude}`,
    );
    const data = await res.json();
    if (res.ok && data) return data;
  }

  throw new Error("Fetching location is faild, please try agains");
};

export default locationDataApi;
