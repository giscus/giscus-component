import { createEffect, createSignal, Show } from 'solid-js';
import type { GiscusProps } from './types';

export default function Giscus(props: GiscusProps) {
  const [mounted, setMounted] = createSignal(false);

  createEffect(() => {
    if (mounted()) return;
    void import('giscus');
    setMounted(true);
  });

  // Note: make sure to use kebab-case for the web component's attributes,
  // as it seems Solid cannot properly handle the properties without it.

  return (
    <Show when={mounted()} fallback={null}>
      <giscus-widget
        id={props.id}
        host={props.host}
        repo={props.repo}
        repo-id={props.repoId}
        category={props.category}
        category-id={props.categoryId}
        mapping={props.mapping}
        term={props.term}
        strict={props.strict}
        reactions-enabled={props.reactionsEnabled}
        emit-metadata={props.emitMetadata}
        input-position={props.inputPosition}
        theme={props.theme}
        lang={props.lang}
        loading={props.loading}
      />
    </Show>
  );
}
