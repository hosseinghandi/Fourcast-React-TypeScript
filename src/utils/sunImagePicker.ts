// Role: select proper Sun position Based on the current time

export const sunimageselector = (
  sunSet_H: number,
  sunRise_H: number,
  time: number,
): number => {
  let normlizedTime;
  // check if it is between the sunrise or sunshine otherwis it is night
  if (time > sunRise_H && time < sunSet_H) {
    normlizedTime = (time - sunRise_H) / (sunSet_H - sunRise_H);
  } else {
    // it is night
    normlizedTime = 1;
  }
  const iconIndex = Math.floor(normlizedTime * 4);
  return iconIndex;
};
