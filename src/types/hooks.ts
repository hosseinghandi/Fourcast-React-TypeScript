import type { WeatherResponse, LocationResponse, Coord } from "./api";
export interface FetchingStructure<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface FetchedDataStructure {
  coordinate: Coord;
  location: LocationResponse;
  weather: WeatherResponse;
  loading: boolean;
  error: Error | null;
}
