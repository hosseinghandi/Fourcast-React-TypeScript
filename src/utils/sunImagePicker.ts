// Role: select proper Sun position Based on the current time

export const sunimageselector = (
  sunset: string,
  sunrise: string,
  time: number,
): number => {
  const sunsetNum = Number(sunset.split(":")[0]);
  const sunriseNum = Number(sunrise.split(":")[0]);
  let normlizedTime;
  // check if it is between the sunrise or sunshine otherwis it is night
  if (time > sunriseNum && time < sunsetNum) {
    normlizedTime = (time - sunriseNum) / (sunsetNum - sunriseNum);
  } else {
    // it is night
    normlizedTime = 1;
  }
  const iconIndex = Math.floor(normlizedTime * 4);
  return iconIndex;
};
