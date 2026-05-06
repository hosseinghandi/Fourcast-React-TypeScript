import { useState, useEffect } from "react";
import type { Coord } from "../types/api";
import type { FetchingStructure } from "../types/hooks";

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
