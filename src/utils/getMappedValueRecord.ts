import type {MappedValueRecord} from '../types.js';
import stringify from './stringify.js';
import numberify from './numberify.js';
import createChunkMaps from './createChunkMaps.js';
import isFunction from './isFunction.js';
import isNaN from './isNaN.js';
import isNull from './isNull.js';
import isObject from './isObject.js';
import isSymbol from './isSymbol.js';
import isUndefined from './isUndefined.js';

const getMappedValueRecord = (value: unknown): MappedValueRecord => {
  if (
    typeof value === 'string' ||
    value instanceof String ||
    ((typeof value === 'number' || value instanceof Number) && !isNaN(value)) ||
    typeof value === 'boolean' ||
    value instanceof Boolean ||
    value instanceof Date
  ) {
    const stringValue = stringify(value);
    const parsedNumber = numberify(stringValue);
    const chunks = createChunkMaps(parsedNumber ? `${parsedNumber}` : stringValue);

    return {
      parsedNumber,
      chunks,
      value,
    };
  }

  return {
    isArray: Array.isArray(value),
    isFunction: isFunction(value),
    isNaN: isNaN(value),
    isNull: isNull(value),
    isObject: isObject(value),
    isSymbol: isSymbol(value),
    isUndefined: isUndefined(value),
    value,
  };
};

export default getMappedValueRecord;
