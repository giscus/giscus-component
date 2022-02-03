import Giscus from './Giscus'
import { Plugin } from 'vue'

const plugin: Plugin = {
  install: (app) => app.component('Giscus', Giscus)
}

export { Giscus, plugin }

export type {
  GiscusProps,
  BooleanString,
  InputPosition,
  Session,
  Repo,
  Mapping,
  Theme,
  Lang
} from '@shared/types'
