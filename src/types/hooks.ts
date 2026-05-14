import type { WeatherResponse, LocationResponse, Coord } from "./api";
// This would be used for geoLocation
// to keep the structure coherent with React query responde
export type FetchingStructure<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

export type FetchedDataStructure = {
  coordinate: Coord;
  location: LocationResponse | undefined;
  weather: WeatherResponse | undefined;
  loading: boolean;
  isLocationPlaceholder: boolean;
  error: {
    coord: Error | null;
    location: Error | null;
    weather: Error | null;
  };
};
