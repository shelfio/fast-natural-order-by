import getMappedValueRecord from './getMappedValueRecord';
import compareValues from './compareValues';
import type {BaseCompareOptions} from '../types';

function baseCompare(options: BaseCompareOptions) {
  return (valueA: unknown, valueB: unknown): number => {
    const a = getMappedValueRecord(valueA);
    const b = getMappedValueRecord(valueB);
    const result = compareValues(a, b);

    return result * (options.order === 'desc' ? -1 : 1);
  };
}

export default baseCompare;
