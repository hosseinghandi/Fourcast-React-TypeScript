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
        min-h-screen w-fit flex justify-center items-center mx-auto "
      >
        <Card>
          <div className="flex flex-row gap-large items-end">
            <h1 id="error-message" className="text-red-500 text-error">
              Something went wrong: <br />
              <span id="error-description">
                {error.coord?.message ||
                  error.weather?.message ||
                  "unknown error"}
              </span>
            </h1>
            <iconList.Error aria-hidden="true" className="size-18" />
          </div>
        </Card>
      </div>
    </>
  );
}
