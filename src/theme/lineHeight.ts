const remLineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

const lineHeight = Object.entries(remLineHeight).reduce(
  (acc, [label, rems]) => {
    acc[label] = +rems * 16;
    return acc;
  },
  {} as Record<string, number>
);

export default lineHeight;
