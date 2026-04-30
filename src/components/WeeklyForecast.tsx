export default function WeeklyForecast() {
  return <h1>WeeklyForecast</h1>;
}





// function weeklyWeatherRender(daily) {

//   const todayindx = days.indexOf(exactTime.day);
//   const makeListOfDays = (
//     days.slice(todayindx, 7) + `,${days.slice(0, todayindx + 1)}`
//   ).split(",");

//   const dailyweatherlist = daily.temperature_2m_max;
//   const WeatherCodes_d = daily.weather_code;
//   let htmldaily = "";
//   // eliminate one of the day beacuse it is already render for the hourly data
//   // for weather code just render the day data, so it is hardcoded as "1" in line 450
//   for (let onDay = 0; onDay < makeListOfDays.length - 1; onDay++) {
//     let code = iconselector(WeatherCodes_d[onDay],1)
//     htmldaily += `
//             <div class="weather-item-wrapper">
//             <p >${makeListOfDays[onDay].slice(0, 3)}</p>
//             <img    
//             id="weather-icon"
//             src="icons/weather-cond/${code}.png"  
//             alt="an icon of ${code} weather">
            
//             <p class="fontb-small-weather-list" >${dailyweatherlist[
//               onDay
//             ].toFixed()}<span></span>°</p>
//             </div>
//             `;
//   }
//   return htmldaily;
// }
