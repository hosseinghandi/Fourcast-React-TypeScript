export default function Header() {
  return <h1>Header</h1>;
}



  // locationEl.innerHTML = `<img 
  //               class="loc-icon-s"
  //               src="icons/detailed/loc-${currentSky ? "b" : "w"}.png" 
  //               alt=" a location icon">
  //               <span   class="location" 
  //                       id="location">${locationName}</span>`;

  // mainTempEl.innerHTML = `${current.apparent_temperature.toFixed(0)}<span class="degree">°</span>`;
  // highTempEl.innerHTML = `H:<span id="feelslike_temp">${daily.temperature_2m_max[0].toFixed(0)}°</span>`;
  // lowTempEl.innerHTML = `L:<span id="feelslike_temp">${daily.temperature_2m_min[0].toFixed(0)}°</span>`;
  // generalWeatherState.innerText = weathercodeOfcurrentTimedesc;