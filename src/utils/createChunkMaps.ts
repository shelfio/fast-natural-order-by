import type {ChunkMaps} from '../types';
import createChunks from './createChunks';
import createChunkMap from './createChunkMap';

function createChunkMaps(value: string): ChunkMaps {
  return createChunks(value).map(createChunkMap);
}

export default createChunkMaps;
