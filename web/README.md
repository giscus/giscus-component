# giscus-widget

A web component to embed [giscus](https://giscus.app), a comments system powered
by GitHub Discussions.

## Documentation

To use, install the package from NPM.

```
npm install giscus
```

You can also use [unpkg](https://unpkg.com) or [Skypack](https://skypack.dev).

```html
<!-- unpkg -->
<script type="module" src="https://unpkg.com/giscus?module"></script>

<!-- Skypack -->
<script type="module" src="https://cdn.skypack.dev/giscus"></script>
```

Then use it in your HTML.

```html
<giscus-widget
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

The attributes are the same as shown on [giscus.app](https://giscus.app), but
with the `data` prefix and dashes removed. Changing the attributes will also
update the widget by sending a `message` event to the underlying `<iframe>`. For
more details, see [giscus.app](https://giscus.app) and its
[advanced usage guide](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md).

## License

Released under the [MIT](LICENSE) license.
