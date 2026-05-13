import { Card, CardTitle } from "..";
import iconList from "../../constant/iconList";
import WindCompass from "../ui/WindCompass";
import createWindData from "../../utils/createWindData";
import type { WindData } from "../../types/extraction";
type props = WindData;

export default function WindCard({
  wind_speed_10m,
  wind_gusts_10m,
  wind_direction_10m,
}: props) {
  const tableData = createWindData(
    wind_speed_10m,
    wind_gusts_10m,
    wind_direction_10m,
  );
  return (
    <>
      <Card>
        <CardTitle title="Wind" Icon={iconList.Wind} />
        <div
          className="
          flex flex-row justify-between items-center
          md:gap-medium min-[900px]:max-[1350px]:flex-col
          lg:gap-large  
          "
        >
          <table className="w-1/2 md:w-full">
            <tbody>
              {tableData.map(({ title, value, unit, aria }) => (
                <tr
                  key={title}
                  className="border-b flex flex-row justify-between pt-small"
                >
                  <th scope="row" className="font-normal">
                    {title}
                  </th>
                  <td className="font-bold text-primary">
                    {value}
                    <span aria-hidden="true"> {unit}</span>
                    <span className="sr-only">{aria}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="flex-1 flex justify-end 
            min-[400px]:max-[490px]:justify-center
            min-[550px]:max-[595px]:justify-center
          "
          >
            <WindCompass
              wind_direction_10m={wind_direction_10m}
              wind_speed_10m={wind_speed_10m}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
