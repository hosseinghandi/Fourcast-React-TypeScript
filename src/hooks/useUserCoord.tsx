import { useState, useEffect } from "react";
import type { Coord, FetchingStructure } from "../types/fetching";

function useUserCoord(): FetchingStructure<Coord> {
  const [data, setdata] = useState<Coord | null>({
    latitude: 0,
    longitude: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setdata({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(new Error(err.message));
        setLoading(false);
      },
    );
  }, []);
  return { data, loading, error };
}
export default useUserCoord;
