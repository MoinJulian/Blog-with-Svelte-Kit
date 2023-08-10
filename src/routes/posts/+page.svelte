<script lang="ts">
	import { fade } from 'svelte/transition';
	import { active_filter } from './stores';
	import ProjectPreview from './ProjectPreview.svelte';

	export let data;
	const { posts, years } = data;

	$: filtered_posts = posts.filter(
		(post: { date: { getFullYear: () => number } }) =>
			$active_filter.years.length == 0 || $active_filter.years.includes(post.date.getFullYear())
	);
</script>

<svelte:head>
	<title>MoinJulian - Posts</title>
</svelte:head>

<h1>Posts</h1>

<p>This are all my Posts so far.</p>

{#if filtered_posts.length > 0}
	<ol class="no-bullets">
		{#each filtered_posts as post (post.id)}
			<ProjectPreview {post} />
		{/each}
	</ol>
{:else}
	<p in:fade={{ duration: 200, delay: 200 }}>No posts within this filter</p>
{/if}

<style>
	ol {
		margin-top: 1rem;
	}
</style>
