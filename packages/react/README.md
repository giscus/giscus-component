<p align="center">

  <h1 align="center">utterances-react-component</h1>
</p>

<p align="center">
Type safety react component for utterances
</p>

<div align="center">

[![test](https://github.com/TomokiMiyauci/utterances-react-component/actions/workflows/test.yml/badge.svg)](https://github.com/TomokiMiyauci/utterances-react-component/actions/workflows/test.yml)
[![GitHub release](https://img.shields.io/github/release/TomokiMiyauci/utterances-react-component.svg)](https://github.com/TomokiMiyauci/utterances-react-component/releases)
![npm download](https://img.shields.io/npm/dw/utterances-react-component?color=blue)

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/TomokiMiyauci/utterances-react-component)
[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/utterances-react-component.svg)](https://david-dm.org/TomokiMiyauci/utterances-react-component)
[![codecov](https://codecov.io/gh/TomokiMiyauci/utterances-react-component/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/utterances-react-component)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/utterances-react-component/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/utterances-react-component&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/utterances-react-component)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

---

React component for [utterances](https://utteranc.es/) 🔮

Utterances is a lightweight comments widget built on GitHub issues, for blog comments, wiki pages and more.

## :sparkles: Features

- :books: Pure TypeScript and TSX and provides type definition
- :earth_americas: Multiple modules, providing `ES modules` and `Commonjs`
- :package: Optimized, super slim size

## :zap: Quick view

```tsx
import { Utterances } from 'utterances-react-component'
;<Utterances
  repo="TomokiMiyauci/utterances-component"
  theme="github-dark"
  issueTerm="pathname"
/>
```

## :dizzy: Install

### :package: Node.js

```bash
npm i utterances-react-component
or
yarn add utterances-react-component
```

### :globe_with_meridians: Browser

The module that bundles the dependencies is obtained from
[skypack](https://www.skypack.dev/view/utterances-react-component).

import like this:

```tsx
import { Utterances } from 'https://cdn.skypack.dev/utterances-react-component'
```

**peerDependency**

| package     | version                         |
| ----------- | ------------------------------- |
| `react`     | `^16` &#124; `^17` &#124; `^18` |
| `react-dom` | `^16` &#124; `^17` &#124; `^18` |

## API

### Props

It has a strict type definition.
No default value is set to respect the original behavior.

[Official document](https://utteranc.es/)

| Name          | Type                                                                                                                                                                   | Description                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `repo`        | `${String}/${String}`                                                                                                                                                  | Repository for Utterances to connect to. Expected value: `username/repo`                           |
| `theme`       | `github-light` &#124; `github-dark` &#124; `preferred-color-scheme` &#124; `github-dark-orange` &#124; `icy-dark` `dark-blue` &#124; `photon-dark` &#124; `boxy-light` | The Utterance theme.                                                                               |
| `label`       | `string?`                                                                                                                                                              | Choose the label that will be assigned to issues created by Utterances.                            |
| `issueTerm`   | `pathname` &#124; `url` &#124; `title` &#124; `og:title`                                                                                                               | The mapping between blog posts and GitHub issues. <td rowspan="2">One of them[1]</td>              |
| `issueNumber` | `number`                                                                                                                                                               | You configure Utterances to load a specific issue by number. Issues are not automatically created. |

[1] `issueTerm` and `issueNumber` are exclusive. TypeScript will prompt you to specify one or the other.

## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues](https://github.com/TomokiMiyauci/utterances-react-component/issues).

[Contributing guide](./.github/CONTRIBUTING.md)

## :seedling: Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tomoki_miyauci">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## :bulb: License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
