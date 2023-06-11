export const countRepetitionsOfElement = (array: string[]): number => {
  const countArray: { [key: string]: number } = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element) {
      countArray[element] = (countArray[element] || 0) + 1;
    }
  }

  const counts = Object.values(countArray) || [];

  return Math.max(...counts);
};
