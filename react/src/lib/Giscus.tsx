import { useEffect } from 'react';
import type { GiscusProps } from './types';

export default function Giscus({
  id,
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  term,
  reactionsEnabled,
  emitMetadata,
  inputPosition,
  theme,
  lang,
  loading,
}: GiscusProps) {
  useEffect(() => {
    import('giscus');
  }, []);

  return (
    <giscus-widget
      id={id}
      repo={repo}
      repoid={repoId}
      category={category}
      categoryid={categoryId}
      mapping={mapping}
      term={term}
      reactionsenabled={reactionsEnabled}
      emitmetadata={emitMetadata}
      inputposition={inputPosition}
      theme={theme}
      lang={lang}
      loading={loading}
    />
  );
}
