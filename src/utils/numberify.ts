import parseNumber from './parseNumber.js';
import parseDate from './parseDate.js';
import type {ParsedNumber} from '../types.js';

const numberify = (value: string): ParsedNumber | undefined => {
  const parsedNumber = parseNumber(value);

  if (parsedNumber !== undefined) {
    return parsedNumber;
  }

  return parseDate(value);
};

export default numberify;
