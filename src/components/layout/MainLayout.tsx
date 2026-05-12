import { Header, BackgroundHandeler } from "../../components";
import { useSearch } from "../../context/useSearch";
import { ErrorScreen, Loader, GridLayout } from "../../components";
import { useFetchedData } from "../../hooks/useFetchedData";
import { useEffect } from "react";

export function MainLayout() {
  const { city } = useSearch();
  const { loading, error, weather, location } = useFetchedData(city);
  console.log(weather);
  useEffect(() => {
    if (loading || error) return;
    document.documentElement.className =
      weather?.current.is_day === 1 ? "" : "dark";
  }, [loading, error, weather]);

  if (loading) return <Loader />;
  if (error?.message) return <ErrorScreen message={error.message} />;
  if (!weather || !location) return <Loader />;
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-center dark:text-foreground dark:border-foreground-mate 
        min-h-screen lg:min-h-[90vh] justify-end w-full p-large"
      >
        <BackgroundHandeler {...weather.current} />
        <GridLayout location={location} weather={weather} />
      </main>

      <footer></footer>
    </>
  );
}
