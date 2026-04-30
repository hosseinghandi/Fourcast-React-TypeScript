export const compass = {
  points: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  fromDegreetoPoint(deg:number) {
    const normalized = ((deg % 360) + 360) % 360;
    const idx = Math.round(normalized / 45) % 8;
    return idx;
  },
};