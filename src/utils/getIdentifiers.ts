import type {Identifier} from '../types.js';

const getIdentifiers = <T>(
  identifiers?:
    | (ReadonlyArray<Identifier<T>> | null | undefined)
    | (Identifier<T> | null | undefined)
): Array<Identifier<T>> => {
  if (!identifiers) {
    return [];
  }

  const identifierList = !Array.isArray(identifiers) ? [identifiers] : [...identifiers];

  if (
    identifierList.some(
      identifier =>
        typeof identifier !== 'string' &&
        typeof identifier !== 'number' &&
        typeof identifier !== 'function'
    )
  ) {
    return [];
  }

  return identifierList;
};

export default getIdentifiers;
