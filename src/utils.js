export const coordToKey = (x, y, z) => {
  return (
    x.toString().padStart(3, '0') +
    y.toString().padStart(3, '0') +
    z.toString().padStart(3, '0')
  );
};
