export const pick = <t extends Record<string, unknown>, k extends keyof t>(
  obj: t,
  keys: k[]
) => {
  return keys.reduce((acc: Partial<t>, key: k) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Partial<t>);
};
