<script lang="ts">
	import { onMount } from 'svelte';
	import type {
		AvailableLanguage,
		BooleanString,
		InputPosition,
		Loading,
		Mapping,
		Theme
	} from '$lib';

	onMount(() => import('giscus'));

	export let id: string = undefined;
	export let repo: `${string}/${string}`;
	export let repoId: string;
	export let category: string = undefined;
	export let categoryId: string = undefined;
	export let mapping: Mapping = 'pathname';
	export let term: string = undefined;
	export let reactionsEnabled: BooleanString = '1';
	export let emitMetadata: BooleanString = '0';
	export let inputPosition: InputPosition = 'bottom';
	export let theme: Theme = 'light';
	export let lang: AvailableLanguage = 'en';
	export let loading: Loading = 'eager';
</script>

<main>
	<giscus-widget
		{id}
		{repo}
		repoid={repoId}
		{category}
		categoryid={categoryId}
		{mapping}
		{term}
		reactionsenabled={reactionsEnabled}
		emitmetadata={emitMetadata}
		inputposition={inputPosition}
		{theme}
		{lang}
		{loading}
	/>
</main>
