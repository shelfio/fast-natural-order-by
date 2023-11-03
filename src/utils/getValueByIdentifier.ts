import type {IdentifierFn} from '../types.js';

const getValueByIdentifier = <T>(value: T, getValue: IdentifierFn<T>): unknown | T =>
  getValue(value);

export default getValueByIdentifier;
