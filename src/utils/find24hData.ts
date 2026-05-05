const find24hData = <T>(data: T[], start: number): T[] => {
  return data.slice(start, start + 24);
};

export default find24hData;
