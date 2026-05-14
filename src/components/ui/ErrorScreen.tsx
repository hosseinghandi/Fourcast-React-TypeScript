import Card from "../shared/Card";
import iconList from "../../constant/iconList";
import type { FetchedDataStructure } from "../../types/hooks";
type Props = Pick<FetchedDataStructure, "error">;

export default function ErrorScreen({ error }: Props) {
  return (
    <>
      <div
        role="alert"
        aria-labelledby="error-message"
        aria-describedby="error-description"
        className="
        min-h-screen w-fit flex justify-center items-center mx-auto p-large"
      >
        <Card>
          <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center  flex-row gap-large items-end">
            <h1 id="error-message" className="text-red-500 text-error">
              Something went wrong: <br />
              <div id="error-description">
                {error.coord && (
                  <p>Coordination Error : {error.coord.message}</p>
                )}
                {error.location && (
                  <p>Location Error: {error.location.message}</p>
                )}
                {error.weather && (
                  <p>Weather data Error : {error.weather.message}</p>
                )}
              </div>
            </h1>
            <iconList.Error aria-hidden="true" className="size-18" />
          </div>
        </Card>
      </div>
    </>
  );
}
