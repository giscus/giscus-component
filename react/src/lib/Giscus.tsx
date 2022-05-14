import { useEffect, useState } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    import('giscus');
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
