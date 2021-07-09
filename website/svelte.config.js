// import sveltePreprocess from 'svelte-preprocess'

// export default {
//   // Consult https://github.com/sveltejs/svelte-preprocess
//   // for more information about preprocessors
//   preprocess: sveltePreprocess()
// }

const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess()
}
