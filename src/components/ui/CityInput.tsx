import iconList from "../../constant/iconList";
import { useSearch } from "../../context/useSearch";
export default function CityInput() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue = new FormData(e.currentTarget).get("search");
    setCity(String(inputValue));
    e?.currentTarget.reset();
  }
  const { setCity } = useSearch();
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="flex items-center rounded-radius 
            px-small py-tight border border-foreground-mate 
            backdrop-blur-md w-full sm:max-w-[300px] 
            hover:backdrop-blur-sm"
      >
        <iconList.Search
          aria-hidden="true"
          className="size-icon-secondary dark:fill-foreground"
        />
        <input
          name="search"
          minLength={2}
          maxLength={20}
          className="ml-small text-body outline-none"
          type="text"
          placeholder="Search a city or location"
        />
      </div>
    </form>
  );
}
