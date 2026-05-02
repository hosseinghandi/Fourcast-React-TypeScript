export default function WindCard() {
  return <h1>WindCard</h1>;
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