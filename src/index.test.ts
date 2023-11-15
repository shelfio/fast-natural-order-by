import {compare, orderBy} from './';

it('should export compare utility', () => {
  expect(compare('desc')('a', 'b')).toBe(1);
});

describe('order by', () => {
  it('should sort plain data types with asc order by defauls', () => {
    expect(orderBy(['a', 'b'])).toEqual(['a', 'b']);
    expect(orderBy(['b', 'a'])).toEqual(['a', 'b']);
    expect(orderBy([1, 10, 110])).toEqual([1, 10, 110]);
    expect(orderBy([10, 1, 110])).toEqual([1, 10, 110]);
    expect(orderBy([undefined, true, false])).toEqual([false, true, undefined]);
  });

  it('should sort plain data types with desc order by defauls', () => {
    expect(orderBy(['a', 'b'], undefined, 'desc')).toEqual(['b', 'a']);
    expect(orderBy([1, 10, 110], undefined, 'desc')).toEqual([110, 10, 1]);
  });

  it('should sort objects by predicate', () => {
    const users = [
      {
        name: 'John',
        age: 20,
      },
      {
        name: 'Jane',
        age: 30,
      },
      {
        name: 'Johny',
        age: 10,
      },
    ];

    expect(orderBy(users, 'name')).toEqual([
      {age: 30, name: 'Jane'},
      {age: 20, name: 'John'},
      {age: 10, name: 'Johny'},
    ]);

    expect(orderBy(users, 'age')).toEqual([
      {age: 10, name: 'Johny'},
      {age: 20, name: 'John'},
      {age: 30, name: 'Jane'},
    ]);
  });
});
