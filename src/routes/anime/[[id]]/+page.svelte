<script lang="ts">
	import { generateTrailerUrl } from '$lib/generate-trailer-url';
	import { clsx } from 'clsx';
	import type { PageData } from './$houdini';
	import { styles } from '$lib/styles';

	export let data: PageData;

	$: ({ Anime } = data);

	const goBack = () => {
		window.history.back();
	};

	$: hasTrailer = Boolean($Anime.data?.Media?.trailer);
</script>

<div class={clsx('grid justify-items-center gap-y-8 py-4 md:py-10', styles.paddingHorizontal)}>
	<button on:click={goBack}>GO BACK</button>

	<div class="grid md:justify-self-start gap-y-1">
		<h1 class="text-4xl text-center md:text-[50px] font-medium leading-[1.25]">
			{$Anime.data?.Media?.title?.english ?? $Anime.data?.Media?.title?.userPreferred}
		</h1>

		<div class="flex space-x-2 justify-center md:justify-start items-center">
			<span class="text-xs md:text-sm text-black/70">{$Anime.data?.Media?.title?.native}</span>
			<span>|</span>
			<span class="text-xs md:text-sm text-black/70">{$Anime.data?.Media?.title?.romaji}</span>
			<span>|</span>
			<span class="text-xs md:text-sm text-black/70"
				>{$Anime.data?.Media?.title?.userPreferred}</span
			>
		</div>
	</div>

	<div
		class={clsx('grid w-full gap-1', {
			'md:grid-cols-[1fr_3fr]': hasTrailer
		})}
	>
		<div class={clsx("relative", {
      "w-full pb-[50%]": !hasTrailer
    })}>
			<img
				src={$Anime.data?.Media?.coverImage?.extraLarge}
				alt="Anime cover"
				class='object-cover md:absolute w-full h-full inset-x-0'
			/>
		</div>

		{#if hasTrailer}
			<div class="w-full">
				<iframe
					class="w-full aspect-video"
					title="anime trailer"
					src={generateTrailerUrl({
						id: $Anime.data?.Media?.trailer?.id,
						site: $Anime.data?.Media?.trailer?.site
					})}
				/>
			</div>
		{/if}
	</div>

	<div>
		{$Anime.data?.Media?.description}
	</div>
</div>
