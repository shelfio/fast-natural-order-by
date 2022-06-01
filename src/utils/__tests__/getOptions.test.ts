import getOptions from '../getOptions';

const defaultOptions = {
  order: 'asc',
};

describe('getOptions()', () => {
  describe('valid options', () => {
    it('should return custom options, if argument is object', () => {
      const customOptions = {order: 'desc' as const};
      const options = getOptions(customOptions);
      const expected = customOptions;

      expect(options).toEqual(expected);
    });

    it('should return custom options, if argument is a string', () => {
      const customOptions = 'desc';
      const options = getOptions(customOptions);
      const expected = {order: customOptions};

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is undefined', () => {
      const options = getOptions();
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is empty object', () => {
      const options = getOptions({});
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });
  });

  describe('invalid options', () => {
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: 'abc'};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: true};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: 1};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: {}};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: () => {}};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: Symbol()};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = {order: null};
      // @ts-expect-error
      const options = getOptions(customOptions);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is null', () => {
      // @ts-expect-error
      const options = getOptions(null);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is an object with unknown properties', () => {
      // @ts-expect-error
      const options = getOptions({a: 1, b: 2, c: 3});
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is an invalid string', () => {
      // @ts-expect-error
      const options = getOptions('abc');
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is a number', () => {
      // @ts-expect-error
      const options = getOptions(123);
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is a function', () => {
      // @ts-expect-error
      const options = getOptions(() => {});
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });

    it('should return default options, if argument is a symbol', () => {
      // @ts-expect-error
      const options = getOptions(Symbol());
      const expected = defaultOptions;

      expect(options).toEqual(expected);
    });
  });
});
