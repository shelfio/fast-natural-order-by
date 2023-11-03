import type {ChunkMaps} from '../types.js';
import createChunks from './createChunks.js';
import createChunkMap from './createChunkMap.js';

function createChunkMaps(value: string): ChunkMaps {
  return createChunks(value).map(createChunkMap);
}

export default createChunkMaps;
