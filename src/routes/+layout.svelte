<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import LoadProgress from '$lib/components/LoadProgress.svelte';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import './app.css';
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

	<title>Blog with SvelteKit</title>
</svelte:head>

<LoadProgress />
<ScrollUp />

<div class="wrapper">
	<Nav />

	<main>
		<slot />
	</main>
</div>

<style>
	.wrapper {
		max-width: 40rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}
	main {
		padding-block: 1rem 2rem;
	}
</style>
