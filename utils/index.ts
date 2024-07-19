// I created this in order to not duplicate the generation of the locationOptions and the categoryOptions

export function generateOptions(items: string[]) {
  return items.map((item: string) => ({
    value: item,
    title: item,
  }));
}

// I Created this util for less code duplication

export function getUniqueValues<T>(items: T[], key: keyof T): string[] {
  return [...new Set(items.map((item) => item[key] as unknown as string))];
}
