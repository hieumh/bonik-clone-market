export const getPercentOfFirstNum = (
  firstNum: number,
  secondNum: number,
): number => {
  return Math.floor((firstNum / (firstNum + secondNum)) * 100);
};
