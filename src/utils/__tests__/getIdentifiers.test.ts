import getIdentifiers from '../getIdentifiers';

describe('getIdentifiers()', () => {
  describe('valid values', () => {
    it('should return original value, if valid value provided', () => {
      const identifiers = ['user'];
      const value = getIdentifiers(identifiers);
      const expected = identifiers;

      expect(value).toEqual(expected);
    });

    it('should return array with provided value, if value was a string', () => {
      const identifiers = 'user';
      const value = getIdentifiers(identifiers);
      const expected = [identifiers];

      expect(value).toEqual(expected);
    });

    it('should return array with provided value, if value was a number', () => {
      const identifiers = '1';
      const value = getIdentifiers(identifiers);
      const expected = [identifiers];

      expect(value).toEqual(expected);
    });

    it('should return array with provided value, if value was a function', () => {
      const identifiers = (v: string): string => v;
      const value = getIdentifiers(identifiers);
      const expected = [identifiers];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if null value provided', () => {
      const identifiers = null;
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if undefined provided', () => {
      const identifiers = undefined;
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });
  });

  describe('invalid values', () => {
    it('should return empty array, if object provided', () => {
      const identifiers = {};
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if symbol provided', () => {
      const identifiers = Symbol();
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if boolean provided', () => {
      const identifiers = true;
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [[1]];
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [{a: 1}];
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [undefined];
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [null];
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [Symbol()];
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });

    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [true];
      // @ts-expect-error
      const value = getIdentifiers(identifiers);
      const expected: any[] = [];

      expect(value).toEqual(expected);
    });
  });
});
