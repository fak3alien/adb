<script lang="ts">
	export let image: string;
	export let title: string;
	export let url: string;
</script>

<a
	href={url}
	class="grid justify-items-center gap-y-2 border border-black/20 p-4 cursor-pointer hover:-translate-y-2 transition-transform"
>
	<div role="img" class="w-full aspect-[2/3]" on:mousemove={(e) => {}}>
		<img src={image} alt="anime card cover" class="w-full h-full object-cover" />
	</div>
	<span class="fonnt-meduim text-center">{title}</span>
</a>
