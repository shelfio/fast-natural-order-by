import type {Chunk, ChunkMap, Chunks} from '../types.js';
import normalizeAlphaChunk from './normalizeAlphaChunk.js';
import normalizeNumericChunk from './normalizeNumericChunk.js';

const createChunkMap = (chunk: Chunk, index: number, chunks: Chunks): ChunkMap => {
  return {
    parsedNumber: normalizeNumericChunk(chunk, index, chunks),
    normalizedString: normalizeAlphaChunk(chunk),
  };
};

export default createChunkMap;
