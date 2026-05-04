import { useState, useEffect } from "react";
import type { Coord, FetchingStructure } from "../types/fetching";

function useUserCoord(): FetchingStructure<Coord> {
  const [data, setData] = useState<Coord | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setData({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
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
