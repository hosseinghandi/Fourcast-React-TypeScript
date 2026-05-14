import CityInput from "../ui/CityInput";
import iconList from "../../constant/iconList";
import { useSearch } from "../../context/useSearch";
import { useToast } from "../../hooks/useToast";

type Props = { notFoundMessage?: string };
export default function Header({ notFoundMessage }: Props) {
  const { setCity } = useSearch();
  const visibility = useToast(notFoundMessage);
  return (
    <>
      <nav aria-label="Main navigation" className="h-nav w-full p-medium ">
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
            <div className="flex flex-row items-end gap-tight">
              <span className="text-logo font-semibold">FourCast</span>
              <iconList.Logo aria-hidden="true" className="size-icon-primary" />
            </div>
          </button>
          <CityInput />
        </div>
        {
          <div
            className={`max-sm:w-11/12 fixed left-1/2 -translate-x-1/2 tranform-top duration-500 ease border-1 rounded-radius p-medium backdrop-blur-md
                      ${
                        visibility && notFoundMessage
                          ? "top-[30px] max-sm:top-[100px]"
                          : "-top-[150px]"
                      }`}
          >
            <p className="text-error font-bold text-red-900">
              {notFoundMessage}
            </p>
          </div>
        }
      </nav>
    </>
  );
}
