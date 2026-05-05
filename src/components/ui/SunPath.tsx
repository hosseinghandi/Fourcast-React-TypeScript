type props = {
  sunrise: string[];
  sunset: string[];
};
export default function SunPath({ sunrise, sunset }: props) {
  return (
    <>
      <h1>SUNPATH</h1>
      <h1>{sunrise[0]}</h1>
      <h1>{sunset[0]}</h1>
    </>
  );
}

// function sunRiseShine() {
//   const sunRise = daily.sunrise[0].split("T")[1];
//   const sunSet = daily.sunset[0].split("T")[1];
//   sunWrapperEl.innerHTML = `
//     <span id="sunrise">${sunRise} </span>
//     <span id="sunshine">${sunSet}</span>
//     `;

//   sunEl.src = `./icons/sunrise-shine/${sunimageselector(
//     sunSet,
//     sunRise
//   )}.png`;
//   sunEl.ariaLabel = `Current sun position at ${exactTime} ${exactTime > 12 ? "PM" : "AM"}`
// }
