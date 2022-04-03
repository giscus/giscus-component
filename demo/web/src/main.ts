import 'giscus';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <giscus-widget
    repo="giscus/giscus-component"
    repoid="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
    category="Announcements"
    categoryid="DIC_kwDOF1L2fM4B-hVS"
    mapping="specific"
    term="Welcome to giscus web component!"
    reactionsenabled="1"
    emitmetadata="0"
    inputposition="top"
    theme="light"
    lang="en"
  >
  </giscus-widget>
`;
