import { Card, CardTitle } from "..";
import iconList from "../../constant/iconList";
import WindCompass from "../ui/WindCompass";
type props = {
  wind_speed_10m: number;
  wind_gusts_10m: number;
  wind_direction_10m: number;
};
export default function WindCard({
  wind_speed_10m,
  wind_gusts_10m,
  wind_direction_10m,
}: props) {
  const tableRow = [
    { title: "Wind", value: wind_speed_10m },
    { title: "Guts", value: wind_gusts_10m },
    { title: "Direction", value: wind_direction_10m },
  ];
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
              {tableRow.map(({ title, value }) => (
                <tr
                  key={title}
                  className="border-b 
              flex flex-row justify-between pt-small"
                >
                  <td>{title}</td>
                  <td className="font-bold text-primary">{value}</td>
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
            <WindCompass angleDeg={wind_direction_10m} />
          </div>
        </div>
      </Card>
    </>
  );
}

// function windRender() {
//   windArrow.style.setProperty("--angle", `${current.wind_direction_10m}deg`);
//   windVelocity.innerHTML = ` <div class="wind-flex">
//         <span class="detail-title">Wind</span>
//         <span><strong class="detail-value">${current.wind_speed_10m}</strong></span>
//     </div>
//     `;
//   windGusts.innerHTML = ` <div class="wind-flex">
//         <span class="detail-title">Gusts</span>
//         <span><strong class="detail-value">${current.wind_gusts_10m}</strong></span>
//     </div>
//     `;

//   windDirection.innerHTML = ` <div class="wind-flex">
//         <span class="detail-title">Direction</span>
//         <span>
//         <strong class="detail-value">${
//           current.wind_direction_10m +
//           "°" +
//           " " +
//           compass.points[compass.fromDegreetoPoint(current.wind_direction_10m)]
//         }</strong>
//             </span>
//     </div>
//     `;
// }
