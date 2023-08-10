<script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';

	export let data;

	const {
		attributes: { name, date },
		html_code
	} = data;

	const year = date.getFullYear();
</script>

<svelte:head>
	<title>MoinJulian - {name}</title>
</svelte:head>

<GoBack />

<h1>
	{name}
</h1>

<p class="year">
	{year}
</p>

<article>
	{@html html_code}
</article>

<style>
	.year {
		margin-top: -0.5rem;
		font-size: var(--small-font);
		color: var(--secondary-font-color);
	}
</style>
