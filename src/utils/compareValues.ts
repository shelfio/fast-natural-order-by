import type {MappedValueRecord} from '../types.js';
import compareNumbers from './compareNumbers.js';
import compareChunks from './compareChunks.js';
import compareOtherTypes from './compareOtherTypes.js';

const compareValues = (valueA: MappedValueRecord, valueB: MappedValueRecord): number => {
  if (valueA.value === valueB.value) {
    return 0;
  }

  if (valueA.parsedNumber !== undefined && valueB.parsedNumber !== undefined) {
    return compareNumbers(valueA.parsedNumber, valueB.parsedNumber);
  }

  if (valueA.chunks && valueB.chunks) {
    return compareChunks(valueA.chunks, valueB.chunks);
  }

  return compareOtherTypes(valueA, valueB);
};

export default compareValues;
