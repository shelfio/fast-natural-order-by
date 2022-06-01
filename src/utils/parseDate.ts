import type {ParsedNumber} from '../types';
import {RE_DATE} from './regex';

const parseDate = (value: string): ParsedNumber | void => {
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
