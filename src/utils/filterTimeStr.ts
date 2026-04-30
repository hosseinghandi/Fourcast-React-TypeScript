
export function filterTime(timelist :string[]) {
  const correctedTime = [];
  timelist.forEach((t:any) => {
    if (t == "00") {
      correctedTime.push("24");
    } else if (t <= 9) {
      correctedTime.push(t.split("0")[1]);
    } else {
      correctedTime.push(t);
    }
  });
  correctedTime[0] = "now";
  return correctedTime;
}