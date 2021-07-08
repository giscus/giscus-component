import Utterances from './Utterances'
import { Plugin } from 'vue'

const plugin: Plugin = {
  install: (app) => app.component('Utterances', Utterances)
}

export { Utterances, plugin }
