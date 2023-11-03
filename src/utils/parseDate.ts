import type {ParsedNumber} from '../types.js';
import {RE_DATE} from './regex.js';

const parseDate = (value: string): ParsedNumber | undefined => {
  try {
    const parsedDate = Date.parse(value);

    if (!Number.isNaN(parsedDate)) {
      if (RE_DATE.test(value)) {
        return parsedDate;
      }
    }

    return undefined;
  } catch {
    return undefined;
  }
};

export default parseDate;
