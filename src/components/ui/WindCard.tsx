import { Card, CardTitle } from "../../components";
import iconList from "../../constant/iconList";
import WindCompass from "../shared/WindCompass";
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
        <div className="flex flex-row justify-between items-center">
          <table className="w-1/2">
            {tableRow.map(({ title, value }) => (
              <tr
                key={title}
                className="border-b 
              flex flex-row justify-between"
              >
                <td>{title}</td>
                <td>{value}</td>
              </tr>
            ))}
          </table>
          <WindCompass angleDeg={wind_direction_10m} />
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
