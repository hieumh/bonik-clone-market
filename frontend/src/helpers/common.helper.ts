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
