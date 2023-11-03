import getMappedValueRecord from './getMappedValueRecord.js';
import compareValues from './compareValues.js';
import type {BaseCompareOptions} from '../types.js';

function baseCompare(options: BaseCompareOptions) {
  return (valueA: unknown, valueB: unknown): number => {
    const a = getMappedValueRecord(valueA);
    const b = getMappedValueRecord(valueB);
    const result = compareValues(a, b);

    return result * (options.order === 'desc' ? -1 : 1);
  };
}

export default baseCompare;
