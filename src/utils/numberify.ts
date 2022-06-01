import parseNumber from './parseNumber';
import parseDate from './parseDate';
import type {ParsedNumber} from '../types';

const numberify = (value: string): ParsedNumber | undefined => {
  const parsedNumber = parseNumber(value);

  if (parsedNumber !== undefined) {
    return parsedNumber;
  }

  return parseDate(value);
};

export default numberify;
