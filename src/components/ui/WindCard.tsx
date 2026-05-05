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
  return (
    <>
      <h1>WINDPATH</h1>
      <div className="flex flex-row gap-4">
        <h1>{wind_speed_10m}</h1>
        <h1>{wind_gusts_10m}</h1>
        <h1>{wind_direction_10m}</h1>
      </div>
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
