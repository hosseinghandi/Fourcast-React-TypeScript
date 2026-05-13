import CityInput from "../ui/CityInput";
import iconList from "../../constant/iconList";
import { useSearch } from "../../context/useSearch";
export default function Header() {
  const { setCity } = useSearch();
  return (
    <>
      <nav aria-label="Main navigation" className="h-nav w-full p-medium ">
        {/* logo holder */}
        <div
          className="flex flex-row gap-large gap-tight 
        sm:gap-medium items-center flex-wrap"
        >
          <button
            type="button"
            aria-label="Rest to Your current position"
            onClick={() => setCity(undefined)}
            className="flex flex-row gap-tight items-center hover:cursor-pointer"
          >
            <span className="text-logo">FourCast</span>
            <iconList.Logo aria-hidden="true" className="size-icon-primary" />
          </button>
          <CityInput />
        </div>
      </nav>
    </>
  );
}
