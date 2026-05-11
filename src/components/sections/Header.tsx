import CityInput from "../ui/CityInput";
import iconList from "../../constant/iconList";
export default function Header() {
  return (
    <>
      <nav aria-label="Main navigation" className="h-nav w-full p-medium ">
        {/* logo holder */}
        <div className="flex flex-row gap-large gap-tight sm:gap-medium items-center flex-wrap">
          <div className="flex flex-row gap-tight items-center">
            <span className="text-logo">FourCast</span>
            <div className="size-icon-primary">
              <iconList.Logo aria-hidden="true" className="size-icon-primary" />
            </div>
          </div>
          <CityInput />
        </div>
      </nav>
    </>
  );
}
