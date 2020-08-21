const remFontSize = {
  xs: 0.75,
  sm: 0.875,
  base: 1,
  lg: 1.125,
  xl: 1.25,
  xxl: 1.5,
  "3xl": 1.875,
  "4xl": 2.25,
  "5xl": 3,
  "6xl": 4,
};

const fontSize = Object.entries(remFontSize).reduce((acc, [label, rems]) => {
  acc[label] = rems * 16;
  return acc;
}, {} as Record<string, number>);

export default fontSize;
