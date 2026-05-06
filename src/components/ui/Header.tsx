import iconList from "../../constant/iconList";
export default function Header() {
  return (
    <>
      <nav aria-label="Main navigation" className="h-nav w-full p-medium ">
        {/* logo holder */}
        <div className="flex flex-row gap-large max-sm:gap-tight items-center flex-wrap">
          <div className="flex flex-row gap-tight items-center">
            <span className="text-logo">FourCast</span>
            <div className="size-icon-primary">
              <iconList.Logo aria-hidden="true" className="size-icon-primary" />
            </div>
          </div>
          <div
            className="flex items-center rounded-radius 
            px-small py-tight border border-foreground-mate backdrop-blur-md 
            hover:backdrop-blur-sm"
          >
            <iconList.Search
              aria-hidden="true"
              className="size-icon-secondary dark:fill-foreground"
            />
            <input
              className="ml-small text-body outline-none"
              type="text"
              placeholder="Search a city"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
