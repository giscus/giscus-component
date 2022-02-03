import Giscus from './Giscus'
import { Plugin } from 'vue'

const plugin: Plugin = {
  install: (app) => app.component('Giscus', Giscus)
}

export { Giscus, plugin }

import type {
  GiscusProps,
  BooleanString,
  InputPosition,
  Session,
  Repo,
  Mapping,
  Theme,
  Lang
} from '@shared/types'

export type {
  GiscusProps,
  BooleanString,
  InputPosition,
  Session,
  Repo,
  Mapping,
  Theme,
  Lang
}
