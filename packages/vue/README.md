<p align="center">
  <img alt="hero image" src="https://res.cloudinary.com/dz3vsv9pg/image/upload/v1625751123/projects/utterances-component/utterances-vue-component/hero.png"  />
  <h1 align="center"> utterances-vue-component</h1>
</p>

<p align="center">
Type safety vue component for utterances
</p>

<div align="center">

[![test](https://github.com/TomokiMiyauci/utterances-vue-component/actions/workflows/test.yml/badge.svg)](https://github.com/TomokiMiyauci/utterances-vue-component/actions/workflows/test.yml)
[![GitHub release](https://img.shields.io/github/release/TomokiMiyauci/utterances-vue-component.svg)](https://github.com/TomokiMiyauci/utterances-vue-component/releases)
![npm download](https://img.shields.io/npm/dw/utterances-vue-component?color=blue)

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/TomokiMiyauci/utterances-vue-component)
[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/utterances-vue-component.svg)](https://david-dm.org/TomokiMiyauci/utterances-vue-component)
[![codecov](https://codecov.io/gh/TomokiMiyauci/utterances-vue-component/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/utterances-vue-component)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/utterances-vue-component/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/utterances-vue-component&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/utterances-vue-component)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Futterances-component.svg?type=small)](https://app.fossa.com/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Futterances-component?ref=badge_small)

</div>

---

Vue component for [utterances](https://utteranc.es/) 🔮

Utterances is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more.

## :sparkles: Features

- :books: Pure TypeScript and TSX and provides type definition
- :earth_americas: Multiple modules, providing `ES modules` and `Commonjs`
- :package: Optimized, super slim size

## :zap: Quick view

Locally

Local import of components is recommended.
This is a type-safe props.

```html
<template>
  <Utterances
    repo="giscus/giscus-component"
    theme="github-dark"
    issueTerm="pathname"
  />
</template>

<script setup lang="ts">
  import { Utterances } from 'utterances-vue-component'
</script>
```

Globally

You can also register a component globally.
There will be no more type inference for props.
If there is no reason to do so, local import is recommended.

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from 'utterances-vue-component'

createApp(App).use(plugin).mount('#app')
```

```html
<template>
  <Utterances
    repo="TomokiMiyauci/me"
    issue-term="pathname"
    theme="github-light"
  />
</template>
```

## :dizzy: Install

### :package: Node.js

```bash
npm i utterances-vue-component
or
yarn add utterances-vue-component
```

### :globe_with_meridians: Browser

The module that bundles the dependencies is obtained from
[skypack](https://www.skypack.dev/view/utterances-vue-component).

import like this:

```tsx
import { Utterances } from 'https://cdn.skypack.dev/utterances-vue-component'
```

**peerDependency**

| package | version  |
| ------- | -------- |
| `vue`   | `^3.0.0` |

## :memo: API

### Props

It has a strict type definition.
No default value is set to respect the original behavior.

[Official document](https://utteranc.es/)

| Name          | Type                            | Description                                                                                        |
| ------------- | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `repo`        | `${String}/${String}`           | Repository for Utterances to connect to. Expected value: `username/repo`                           |
| `theme`       | `Theme`                         | The Utterance theme.                                                                               |
| `label`       | `string?`                       | Choose the label that will be assigned to issues created by Utterances.                            |
| `issueTerm`   | `Term` &#124; `string[]`[1](#1) | The mapping between blog posts and GitHub issues. <td rowspan="2">One of them[2](#2)</td>          |
| `issueNumber` | `number`                        | You configure Utterances to load a specific issue by number. Issues are not automatically created. |

---

```ts
declare type Theme =
  | 'github-light'
  | 'github-dark'
  | 'preferred-color-scheme'
  | 'github-dark-orange'
  | 'icy-dark'
  | 'dark-blue'
  | 'photon-dark'
  | 'boxy-light'
declare type Term = 'pathname' | 'url' | 'title' | 'og:title'
```

###### 1

If you chose "Issue title contains specific term", specify the specific term as string array.

###### 2

Unfortunately, props in vue cannot be exclusively defined. You can specify either an `issueTerm` or an `issueNumber`.

## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues](https://github.com/TomokiMiyauci/utterance-component/issues).

## :seedling: Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tomoki_miyauci">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## :bulb: License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Futterances-component.svg?type=large)](https://app.fossa.com/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Futterances-component?ref=badge_large)
