import { Header, BackgroundHandeler } from "../../components";
import { useSearch } from "../../context/useSearch";
import { ErrorScreen, Loader, GridLayout } from "../../components";
import { useFetchedData } from "../../hooks/useFetchedData";
import { useEffect } from "react";
// import type { LayoutProps } from "../../types/extraction";

export function MainLayout() {
  const { city } = useSearch();
  const { loading, error, weather, location } = useFetchedData(city);

  useEffect(() => {
    if (loading || error) return;
    document.documentElement.classList = weather.current.is_day ? "" : "dark";
  }, [loading, error, weather]);

  if (loading) return <Loader />;
  if (error) return <ErrorScreen message={error} />;
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-center 
        min-h-screen lg:min-h-[90vh] justify-end w-full p-large"
      >
        <BackgroundHandeler {...weather.current} />
        <GridLayout location={location} weather={weather} />
      </main>

      <footer></footer>
    </>
  );
}
