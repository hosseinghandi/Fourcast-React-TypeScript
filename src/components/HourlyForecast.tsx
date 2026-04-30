export default function HourlyForecast() {
  return <h1>HourlyForecast</h1>;
}




// function hourlyWeatherRender(hourly) {
//   const take24hValues = (data) => {
//     return data.slice(exactTime.time, exactTime.time + 24);
//   };
//   // use function take 24 h data to render dailt weather data
//   const tempDatatime = take24hValues(hourly.time);
//   const tempDatacel = take24hValues(hourly.temperature_2m);
//   const weathercodes_h = take24hValues(hourly.weather_code);
//   const dayOrNight = take24hValues(hourly.is_day);
//   const actualhourList = tempDatatime.map((t) => t.split("T")[1].split(":")[0]);

//   // this part use a function to delet the etra values which are not necessary for rendering
//   // make it more readiable and shorter for saving space 
//   const correctedTime =
//     actualhourList.length <= 25
//       ? filterTime(actualhourList)
//       : console.error("the actual hours list returns unexpected list length!");

//   // provide data for hourly section 
//   let htmlhourly = "";
//   for (let onTime = 0; onTime < correctedTime.length; onTime++) {
//     let code = iconselector(
//           weathercodes_h[onTime],
//           dayOrNight[onTime]
//         )
//     htmlhourly += `
//         <div class="weather-item-wrapper">
//         <p >${correctedTime[onTime]}</p>
        
//         <img    
//         id="weather-icon"
//         src="icons/weather-cond/${code}.png" 
//         alt="an icon of ${code} weather">
        
//             <p class="fontb-small-weather-list">${tempDatacel[
//               onTime
//             ].toFixed()}<span id="temp"></span>°</p>
//         </div>
//         `;
//   }

//   return htmlhourly;
// }