import { useEffect } from "react";

export function useTheme(weather: number, loading: boolean, error: boolean) {
  useEffect(() => {
    if (loading || error) return;
    document.documentElement.className = weather === 1 ? "" : "dark";
  }, [loading, error, weather]);
}
