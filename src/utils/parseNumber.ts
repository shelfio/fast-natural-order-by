import type {ParsedNumber} from '../types';

const parseNumber = (value: string): ParsedNumber | undefined => {
  if (value.length !== 0) {
    const parsedNumber = Number(value);

    if (!Number.isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }

  return undefined;
};

export default parseNumber;
