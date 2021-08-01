import Giscus from './Giscus'
import { Plugin } from 'vue'

const plugin: Plugin = {
  install: (app) => app.component('Giscus', Giscus)
}

export { Giscus, plugin }
