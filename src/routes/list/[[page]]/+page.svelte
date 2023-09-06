<script lang="ts">
	import type { PageData } from './$houdini';
	import { page } from '$app/stores';
	import { clsx } from 'clsx';
	import Card from './components/card.svelte';
	import { styles } from '$lib/styles';
	export let data: PageData;

	$: ({ AnimeList } = data);
	$: currentPage = parseInt($page.params.page);
	$: prevPage = currentPage - 1 > 0 ? currentPage - 1 : 0;
</script>

<div
	class={clsx(
		'grid grid-cols-[repeat(auto-fit,minmax(0,300px))] w-full justify-center gap-4 py-20',
		styles.paddingHorizontal
	)}
>
	{#if $AnimeList.data?.Page?.media}
		{#each $AnimeList.data?.Page?.media as anime}
			<Card
				url={`/anime/${anime?.id}`}
				image={anime?.coverImage?.extraLarge ?? ''}
				title={anime?.title?.userPreferred ?? ''}
			/>
		{/each}
	{/if}
</div>

<div class="select-none w-full text-center justify-center pt-10 text-2xl">
	<a
		href={`/list/${prevPage}`}
		class={clsx('underline hover:opacity-70 transition-opacity', {
			'opacity-50 pointer-events-none': prevPage <= 0
		})}>prev page</a
	>
	<span>{' | '}</span>
	<a class="underline hover:opacity-70 transition-opacity" href={`/list/${currentPage + 1}`}
		>next page</a
	>
</div>
