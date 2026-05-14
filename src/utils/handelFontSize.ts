const handelFontSize = (desc: string): string => {
  const fontSize =
    desc.length <= 14
      ? "text-temp-state-large"
      : desc.length >= 14 && desc.length <= 18
        ? "text-temp-state-medium"
        : "text-temp-state-small";
  return fontSize;
};

export default handelFontSize;
