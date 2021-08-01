# @giscus/vue

Type-safe Vue component for giscus 💎

giscus is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more.

## ✨ Features

- :books: Pure TypeScript and TSX with type definitions
- :earth_americas: Multiple modules, providing `ES modules` and `CommonJS`

## ⚡ Quick view

Follow the instructions on the [main website](https://giscus.app) and use the
data attributes of the shown `<script>` tag as the props to the `Giscus`
component.

### Locally

Local import of the component is recommended.

```html
<template>
  <Giscus
    repo="..."
    repoId="..."
    category="..."
    categoryId="..."
    mapping="..."
    term="..."
    reactionsEnabled="..."
    emitMetadata="..."
    theme="..."
  />
</template>

<script setup lang="ts">
  import { Giscus } from '@giscus/vue';
</script>
```

### Globally

You can also register a component globally, although not recommended.

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from '@giscus/vue'

createApp(App).use(plugin).mount('#app')
```

```html
<template>
  <Giscus
    repo="..."
    repoId="..."
    category="..."
    categoryId="..."
    mapping="..."
    term="..."
    reactionsEnabled="..."
    theme="..."
  />
</template>
```

## 💫 Install

### 📦 Node.js

```bash
npm i @giscus/vue
# or
yarn add @giscus/vue
```

### 🌐 Browser

The module that bundles the dependencies is obtained from
[skypack](https://www.skypack.dev/view/@giscus/vue).

Import it like this:

```tsx
import { Giscus } from 'https://cdn.skypack.dev/@giscus/vue'
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check out [the repository](https://github.com/giscus/giscus-component).

## 🌱 Show your support

Give a ⭐️ if this project helped you!

## 💡 License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci),
forked by [laymonage](https://github.com/laymonage) for giscus.

Released under the [MIT](./LICENSE) license.
