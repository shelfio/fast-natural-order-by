import type {Chunk} from '../types.js';
import {RE_LEADING_OR_TRAILING_WHITESPACES, RE_WHITESPACES} from './regex.js';

const normalizeAlphaChunk = (chunk: Chunk): string =>
  chunk.replace(RE_WHITESPACES, ' ').replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');

export default normalizeAlphaChunk;
