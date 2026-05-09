import { Header, BackgroundHandeler } from "../../components";
import type { LayoutProps } from "../../types/extraction";
import GridLayout from "./GridLayout";

export function MainLayout({ location, weather }: LayoutProps) {
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
