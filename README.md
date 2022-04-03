# giscus-component

A wrapper component for giscus 💎, a comments system powered by GitHub
Discussions. Currently available for React, Vue, Svelte, and as a Web Component.

## Documentation

### Using the React, Vue, or Svelte component

To use the React, Vue, or Svelte component, install the corresponding package.

```shell
npm i @giscus/react   # for React/Preact
npm i @giscus/vue     # for Vue
npm i @giscus/svelte  # for Svelte
# Change npm with the package manager you use
```

Then, import the default export from the package. Example for React:

```tsx
import Giscus from '@giscus/react';

export default function MyApp() {
  return (
    <Giscus
      id="comments"
      repo="giscus/giscus-component"
      repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="specific"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
```

The prop names are the same as the `data-` attributes shown on the
[giscus website][giscus], but written in `camelCase` with the `data-` prefix and
dashes removed.

### Using the web component

To use the Web component, install the `giscus` package.

```shell
npm i giscus
```

Then import it in your code.

```ts
import "giscus";
```

Alternatively, you can also use [unpkg][unpkg] or [Skypack][skypack].

```html
<!-- unpkg -->
<script type="module" src="https://unpkg.com/giscus?module"></script>

<!-- Skypack -->
<script type="module" src="https://cdn.skypack.dev/giscus"></script>
```

Then use it in your HTML.

```html
<giscus-widget
  id="comments"
  repo="giscus/giscus"
  repoid="MDEwOlJlcG9zaXRvcnkzNTE5NTgwNTM="
  category="General"
  categoryid="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyNzk2NTc1"
  mapping="specific"
  term="Welcome to giscus!"
  reactionsenabled="1"
  emitmetadata="0"
  inputposition="top"
  theme="light"
  lang="en"
  loading="lazy"
></giscus-widget>
```

The attribute names are the same as the `data-` attributes shown on the
[giscus website][giscus], but written in lowercase with the `data-` prefix and
dashes removed.

### Notes

When you change the props/attributes of the React, Vue, and web components, they
will automatically update the giscus configuration using `postMessage()` to the
underlying `<iframe>` element without reloading the comments. Unfortunately,
this doesn't work for Svelte as it always reloads the web component for some
reason. If you know how to fix this, please let me know.

### Further information

See the [demo][demo] and its [code example](./demo). For more information, read
the documentation on the [giscus website][giscus] and its
[advanced usage guide][advanced-usage].

## Packages

This is a monorepo. The base component is written using Lit as a web component.
The other components are built as a wrapper around the web component for
convenience.

| Environment         | Name                                  | Version                                     | Downloads                                     |
| ------------------- | ------------------------------------- | ------------------------------------------- | --------------------------------------------- |
| Web Component (Lit) | [`giscus`](./packages/web)            | [![npm version][web-vbadge]][npm-web]       | [![npm downloads][web-dbadge]][npm-web]       |
| React & Preact      | [`@giscus/react`](./packages/react)   | [![npm version][react-vbadge]][npm-react]   | [![npm downloads][react-dbadge]][npm-react]   |
| Vue                 | [`@giscus/vue`](./packages/vue)       | [![npm version][vue-vbadge]][npm-vue]       | [![npm downloads][vue-dbadge]][npm-vue]       |
| Svelte              | [`@giscus/svelte`](./packages/svelte) | [![npm version][svelte-vbadge]][npm-svelte] | [![npm downloads][svelte-dbadge]][npm-svelte] |

## Related Article

[Introducing giscus](https://laymonage.com/posts/giscus/)

## License

Copyright © 2021-2022 laymonage.

Released under the [MIT](./LICENSE) license.

[giscus]: https://giscus.app
[unpkg]: https://unpkg.com
[skypack]: https://skypack.dev
[demo]: https://giscus-component.vercel.app
[advanced-usage]: https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md
[web-vbadge]: https://img.shields.io/npm/v/giscus.svg
[react-vbadge]: https://img.shields.io/npm/v/@giscus/react.svg
[vue-vbadge]: https://img.shields.io/npm/v/@giscus/vue.svg
[svelte-vbadge]: https://img.shields.io/npm/v/@giscus/svelte.svg
[web-dbadge]: https://img.shields.io/npm/dt/giscus.svg
[react-dbadge]: https://img.shields.io/npm/dt/@giscus/react.svg
[vue-dbadge]: https://img.shields.io/npm/dt/@giscus/vue.svg
[svelte-dbadge]: https://img.shields.io/npm/dt/@giscus/svelte.svg
[npm-web]: https://www.npmjs.com/package/giscus
[npm-react]: https://www.npmjs.com/package/@giscus/react
[npm-vue]: https://www.npmjs.com/package/@giscus/vue
[npm-svelte]: https://www.npmjs.com/package/@giscus/svelte
