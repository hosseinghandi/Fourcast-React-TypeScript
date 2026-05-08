import { Header, BackgroundHandeler } from "../../components";
import type { LayoutProps } from "../../types/extraction";
import GridLayout from "./GridLayout";

export function MainLayout({ location, weather }: LayoutProps) {
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-center min-h-screen 
        justify-center w-full px-large gap-large mb-large"
      >
        <BackgroundHandeler {...weather.current} />
        <GridLayout location={location} weather={weather} />
      </main>

      <footer></footer>
    </>
  );
}
