const isNaN = (value: unknown): boolean =>
  Number.isNaN(value) || (value instanceof Number && Number.isNaN(value.valueOf()));

export default isNaN;
