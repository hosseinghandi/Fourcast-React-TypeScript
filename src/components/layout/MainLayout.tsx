import { Header, BackgroundHandeler } from "../../components";
import { useSearch } from "../../context/useSearch";
import { ErrorScreen, Loader, GridLayout } from "../../components";
import { useFetchedData } from "../../hooks/useFetchedData";
import { useEffect } from "react";

export function MainLayout() {
  const { city } = useSearch();
  const { loading, error, weather, location } = useFetchedData(city);

  const isNotFound = error.location?.message;
  const isDataError = error.coord?.message || error.weather?.message;
  console.log(isNotFound);
  useEffect(() => {
    if (loading || error) return;
    document.documentElement.className =
      weather?.current.is_day === 1 ? "" : "dark";
  }, [loading, error, weather]);

  if (loading) return <Loader />;
  if (isDataError) return <ErrorScreen error={error} />;
  if (!weather || !location) return <Loader />;

  return (
    <>
      <Header />
      <main
        aria-label="Weather information"
        className="flex flex-col items-center dark:text-foreground dark:border-foreground-mate 
        min-h-screen lg:min-h-[90vh] justify-end w-full p-large"
      >
        {isNotFound && <p>{error.location?.message}</p>}
        <span
          className="sr-only"
          aria-live="polite"
        >{`${weather?.current.is_day === 1 ? "Daytime theme" : "Nighttime theme"}`}</span>

        <BackgroundHandeler {...weather.current} />
        <GridLayout location={location} weather={weather} />
      </main>
    </>
  );
}
