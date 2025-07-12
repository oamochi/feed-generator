import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as hiyoko from './hiyoko' //フィード名に書き換え
import * as niwatori from './niwatori' //フィード名に書き換え

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos: Record<string, AlgoHandler> = {
  [hiyoko.shortname]: hiyoko.handler, //フィード名に書き換え
  [niwatori.shortname]: niwatori.handler, //フィード名に書き換え
}

export default algos
