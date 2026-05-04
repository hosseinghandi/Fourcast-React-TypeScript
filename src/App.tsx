import { MainLayout } from "./components/layout/MainLayout";
import { ErrorScreen } from "./components";
import { SpinLoader } from "./components";
import { useFetchedData } from "./hooks/useFetchedData";
function App() {
  const { loading, error, weather, location } = useFetchedData();
  if (loading) return <SpinLoader />;
  // to check later
  if (error) return <ErrorScreen message={error} />;

  if (location && weather)
    return <MainLayout location={location} weather={weather} />;
}

export default App;
