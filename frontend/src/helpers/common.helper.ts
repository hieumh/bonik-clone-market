import { NUM_OF_DIGIT_FOR_COST } from "@/constants/common.constant";
import { isNil } from "lodash";

export const encodePath = (
  url: string,
  obj: Record<string, string | number>
): string => {
  const allParams: [key: string, value: string | number][] =
    Object.entries(obj) || [];
  const invalidKeys = ["null", "undefined"];

  return (
    url +
    allParams
      .map(([key, value]) =>
        invalidKeys.includes(String(key)) ? null : [key, value]
      )
      .reduce((path, currentElement) => {
        if (!currentElement) return path;
        const [key, value] = currentElement;

        return path + `${key}=${value}&`;
      }, "?")
      .slice(0, -1)
  );
};

export const roundWithDigit =
  (numOfDigit: number) =>
  (num: number): number => {
    if (isNil(numOfDigit) || isNil(num)) {
      return num;
    }

    return +num.toFixed(numOfDigit);
  };

export const roundToBaseDigit = roundWithDigit(1);
export const roundForCost = roundWithDigit(NUM_OF_DIGIT_FOR_COST);

const NUM_TO_LETTER_UNIT = {
  1_000: "k",
  1_000_000: "m",
  1_000_000_000: "b",
};

export const detectUnitByNum = (num: number): string => {
  const supportUnits = Object.entries(NUM_TO_LETTER_UNIT).sort(
    (a, b) => +a[0] - +b[0]
  );

  for (const [milestone, unit] of supportUnits) {
    if (num / +milestone >= 1) {
      return roundToBaseDigit(num / +milestone) + unit;
    }
  }

  return String(num);
};
