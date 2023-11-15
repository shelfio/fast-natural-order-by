import benny from 'benny';
// eslint-disable-next-line no-restricted-imports
import {orderBy as orderByOriginal} from 'natural-orderby';
import {orderBy as orderByOptimized} from './lib/index.js';

const inputArray = [
  {
    label:
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv',
    value: 'foo',
  },
];

benny.suite(
  '200 chars long string',
  benny.add('original', () => {
    orderByOriginal(inputArray, ['label']);
  }),
  benny.add('optimized', () => {
    orderByOptimized(inputArray, ['label']);
  }),
  benny.cycle(),
  benny.complete()
);
