import { Header, BackgroundHandeler } from "../../components";
import { useSearch } from "../../context/useSearch";
import { ErrorScreen, Loader, GridLayout } from "../../components";
import { useFetchedData } from "../../hooks/useFetchedData";
export function MainLayout() {
  const { city } = useSearch();
  const { loading, error, weather, location, isLocationPlaceholder } =
    useFetchedData(city);
  // check if any error has occurred during getting data
  const isErrorOccurred = error.coord || error.location || error.weather;

  if (loading) return <Loader />;
  if (isErrorOccurred) return <ErrorScreen error={error} />;
  if (!weather || !location) return <Loader />;

  // see if the search city is equle to
  // given name location otherwise fetching by name went wrong
  const searchFailed =
    !isLocationPlaceholder &&
    !!city &&
    location?.name?.toLowerCase() !== city.toLowerCase();

  return (
    <>
      <Header
        notFoundMessage={
          searchFailed ? `The location '${city}' is not found` : ""
        }
      />
      <main
        aria-label="Weather information"
        className="flex flex-col items-center dark:text-foreground dark:border-foreground-mate 
        min-h-screen lg:min-h-[calc(100vh-7rem)] justify-end w-full px-large"
      >
        <span className="sr-only" aria-live="polite">
          {weather.current.is_day === 1 ? "Daytime theme" : "Nighttime theme"}
        </span>

        <BackgroundHandeler {...weather.current} />
        <GridLayout location={location} weather={weather} />
      </main>
    </>
  );
}
