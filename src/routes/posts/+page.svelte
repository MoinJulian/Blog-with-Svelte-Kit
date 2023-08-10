<script lang="ts">
	import PostPreview from './PostPreview.svelte';

	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>Blog with SvelteKit | Posts</title>
</svelte:head>

<h1>Posts</h1>

<p>Here you find thoughts and tutorials on web development.</p>

<ol class="no-bullets">
	{#each posts as post (post.id)}
		<PostPreview {post} />
	{/each}
</ol>

<style>
	ol {
		margin-top: 1rem;
	}
</style>
