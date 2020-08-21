const remSpacing = {
  px: 1,
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 0.75,
  4: 1,
  5: 1.25,
  6: 1.5,
  8: 2,
  10: 2.5,
  12: 3,
  16: 4,
  20: 5,
  24: 6,
  32: 8,
  40: 10,
  48: 12,
  56: 14,
  64: 16,
};

const spacing = Object.entries(remSpacing).reduce((acc, [label, rems]) => {
  acc[label] = rems * 16;
  return acc;
}, {} as Record<string, number>);

export default spacing;
