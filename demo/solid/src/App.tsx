import type { Component } from 'solid-js';
import Giscus from '@giscus/solid';

import './styles.css';

const App: Component = () => {
  return (
    <div class="comments-container">
      <Giscus
        id="comments"
        repo="giscus/giscus-component"
        repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
        category="Announcements"
        categoryId="DIC_kwDOF1L2fM4B-hVS"
        mapping="specific"
        term="Welcome to @giscus/solid component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
      />
    </div>
  );
};

export default App;
