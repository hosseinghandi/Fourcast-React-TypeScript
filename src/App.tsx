import { MainLayout } from "./components/layout/MainLayout";
import { ErrorScreen } from "./components";
import { Loader } from "./components";
import { useFetchedData } from "./hooks/useFetchedData";
import { useEffect } from "react";
function App() {
  const { loading, error, weather, location } = useFetchedData();

  useEffect(() => {
    if (loading || error) return;
    document.documentElement.classList = weather.current.is_day ? "" : "dark";
  }, [loading, error, weather]);

  if (loading) return <Loader />;
  if (error) return <ErrorScreen message={error} />;
  if (location && weather)
    return <MainLayout location={location} weather={weather} />;
}

export default App;
