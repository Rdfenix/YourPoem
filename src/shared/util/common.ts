export const sortAscending = (itemA: any, itemB: any, field: string) => {
  if (itemA[field] > itemB[field]) {
    return 1;
  }
  if (itemA[field] < itemB[field]) {
    return -1;
  }

  return 0;
};

export const sortDescendant = (itemA: any, itemB: any, field: string) => {
  if (itemA[field] < itemB[field]) {
    return 1;
  }
  if (itemA[field] > itemB[field]) {
    return -1;
  }

  return 0;
};
