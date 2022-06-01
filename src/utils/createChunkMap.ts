import type {Chunk, ChunkMap, Chunks} from '../types';
import normalizeAlphaChunk from './normalizeAlphaChunk';
import normalizeNumericChunk from './normalizeNumericChunk';

const createChunkMap = (chunk: Chunk, index: number, chunks: Chunks): ChunkMap => {
  return {
    parsedNumber: normalizeNumericChunk(chunk, index, chunks),
    normalizedString: normalizeAlphaChunk(chunk),
  };
};

export default createChunkMap;
