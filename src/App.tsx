import { MainLayout } from "./components/layout/MainLayout";
import { ErrorScreen } from "./components";
import { Loader } from "./components";
import { useFetchedData } from "./hooks/useFetchedData";
function App() {
  const { loading, error, weather, location } = useFetchedData();
  if (loading) return <Loader />;
  // to check later
  if (error) return <ErrorScreen message={error} />;

  if (location && weather)
    document.documentElement.classList = weather.current.is_day ? "" : "dark";
  return <MainLayout location={location} weather={weather} />;
}

export default App;
