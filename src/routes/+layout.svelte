<script>
	import '../app.css';
</script>

<div class="grid grid-rows-auto/1fr/auto min-h-screen">
	<header class="bg-blue-300 p-4 text-3xl">
		<a href="/">AniList</a>
	</header>

	<main class="py-20 px-4 md:px-12 2xl:px-[calc((100vw-1440px)/2)]">
		<slot />
	</main>

	<footer>footer</footer>
</div>
