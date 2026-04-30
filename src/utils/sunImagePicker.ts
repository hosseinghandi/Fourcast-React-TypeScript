// Role: select proper Sun position Based on the current time

type sunimageselector = {
    sunSet: string,
    sunRise: string,
    exactTime: any
}

export const sunimageselector = ({sunSet, sunRise, exactTime} :sunimageselector) : number => {
    const sunSetNum = Number(sunSet.split(":")[0]);
    const sunRiseNum = Number(sunRise.split(":")[0]);
    let normlizedTime;
    // check if it is between the sunrise or sunshine otherwis it is night 
    if (exactTime.time > sunRiseNum && exactTime.time < sunSetNum) {
      normlizedTime =
        (exactTime.time - sunRiseNum) / (sunSetNum - sunRiseNum);
    } else {
      // it is night
      normlizedTime = 1;
    }
    const imageidx = Math.floor(normlizedTime * 4);
    return imageidx;
  };