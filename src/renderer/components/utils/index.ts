export const periodArrays = {
  short: ['T - 1', 'T - 2', 'T - 3', 'T - 4'],
  long: [
    'T - 5',
    'T - 6',
    'T - 7',
    'T - 8',
    'T - 9',
    'T - 10',
    'T - 11',
    'T - 12',
    'T - 13',
    'T - 14',
    'T - 15',
    'T - 16',
  ],
};

export const termDescription = {
  short: {
    title: 'Short Term',
    desc: 'Among stocks that has fallen during the selected period (accumulativly over the numnber of selected periods) the table shows selection of stocks that show the positive change between OP and CP on the current trading day. The stocks are sorted by this CP-OP difference.',
  },
  long: {
    title: 'Long Term',
    desc: 'Among stocks that has fallen during the selected period (accumulativly over the numnber of selected periods) the table shows selection of stocks that (a) show the positive change between OP and CP on the current trading day (T + 2) and (b) this CP-OP difference is greater than on any other previous periods from (T - 1) to (T - 16) trading days. The stocks are sorted by this CP-OP difference.',
  },
};

export const getNextDates = (
  currentDate: string | undefined,
  arrayOfDates: Array<string> | undefined
): Array<string> => {
  const result: Array<string> = [];
  if (!currentDate || !arrayOfDates) return result;

  const currIdx = arrayOfDates.findIndex((d) => d === currentDate);

  const nextDate: string | undefined = arrayOfDates[currIdx + 1];
  if (nextDate) result.push(nextDate);
  const nextNextDate: string | undefined = arrayOfDates[currIdx + 2];
  if (nextNextDate) result.push(nextDate);
  result.unshift(currentDate);

  return result;
};
