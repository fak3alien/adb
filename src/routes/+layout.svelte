<script>
	import '../app.css';
</script>

<div class="grid grid-rows-auto/1fr/auto min-h-screen">
	<header class="bg-blue-300 p-4 text-3xl sticky top-0 z-50">
		<a href="/">AniList</a>
	</header>

	<main>
		<slot />
	</main>

	<footer>footer</footer>
</div>
