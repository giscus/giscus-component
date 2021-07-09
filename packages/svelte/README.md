<p align="center">
  <img alt="hero image" src="https://res.cloudinary.com/dz3vsv9pg/image/upload/v1625751101/projects/utterances-component/utterances-svelte-component/hero.png"  />
  <h1 align="center"> utterances-svelte-component</h1>
</p>

<p align="center">
Type safety svelte component for utterances
</p>

<div align="center">

[![test](https://github.com/TomokiMiyauci/utterances-svelte-component/actions/workflows/test.yml/badge.svg)](https://github.com/TomokiMiyauci/utterances-svelte-component/actions/workflows/test.yml)
[![GitHub release](https://img.shields.io/github/release/TomokiMiyauci/utterances-svelte-component.svg)](https://github.com/TomokiMiyauci/utterances-svelte-component/releases)
![npm download](https://img.shields.io/npm/dw/utterances-svelte-component?color=blue)

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/TomokiMiyauci/utterances-svelte-component)
[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/utterances-svelte-component.svg)](https://david-dm.org/TomokiMiyauci/utterances-svelte-component)
[![codecov](https://codecov.io/gh/TomokiMiyauci/utterances-svelte-component/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/utterances-svelte-component)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/utterances-svelte-component/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/utterances-svelte-component&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/utterances-svelte-component)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Futterances-component.svg?type=small)](https://app.fossa.com/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Futterances-component?ref=badge_small)

</div>

---

:construction: No type definition provided yet

Svelte component for [utterances](https://utteranc.es/) 🔮

Utterances is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more.

## :sparkles: Features

- :books: Pure TS svelte provides type definition
- :earth_americas: Multiple modules, providing `ES modules` and `Commonjs`
- :package: Optimized, super slim size

## :zap: Quick view

```html
<script lang="ts">
  import { Utterances } from 'utterances-svelte-component'
</script>

<Utterances
  repo="TomokiMiyauci/utterances-component"
  theme="github-dark"
  issueTerm="pathname"
/>
```

## :dizzy: Install

### :package: Node.js

```bash
npm i utterances-svelte-component
or
yarn add utterances-svelte-component
```

### :globe_with_meridians: Browser

The module that bundles the dependencies is obtained from
[skypack](https://www.skypack.dev/view/utterances-svelte-component).

import like this:

```tsx
import { Utterances } from 'https://cdn.skypack.dev/utterances-svelte-component'
```

## :memo: API

### Props

:construction: No type definition provided yet

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

`issueTerm` and `issueNumber` are exclusive. TypeScript will prompt you to specify one or the other.

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
