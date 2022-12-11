import type { Component } from 'solid-js';
import Giscus from './lib';

const App: Component = () => {
  return (
    <Giscus
      repo="giscus/giscus-component"
      repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="specific"
      term="Welcome to @giscus/solid component!"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
    />
  );
};

export default App;
