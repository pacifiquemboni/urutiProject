export function filterRoles(arr: string[]) {
  const good: string[] = [];
  const bad: string[] = [];

  for (const el of arr) {
    const value = el.trim();
    if (value[0] === "-") {
      const [, ...badRole] = value;
      bad.push(badRole.join("").trim().toLowerCase());
    } else {
      good.push(value.toLowerCase());
    }
  }

  return { good, bad };
}

export function groupBy<T>(list: T[], getKey: (item: T) => string): { [key: string]: T[] } {
  const grouped: { [key: string]: T[] } = {};
  list.forEach((item) => {
    const key = getKey(item);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  });
  return grouped;
}
