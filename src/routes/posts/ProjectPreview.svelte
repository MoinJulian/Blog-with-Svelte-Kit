<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { posts } from './types';
	import PreviewCard from '$lib/components/PreviewCard.svelte';
	export let post: posts;

	const year = post.date.getFullYear();
</script>

<li transition:fade={{ duration: 200 }}>
	<PreviewCard href="../posts/{post.id}">
		<div class="grid">
			<div>
				<h2>{post.name}</h2>
				<div class="teaser">{post.teaser}</div>
				<div class="date">{year}</div>
				<div class="more">More...</div>
			</div>
		</div>
	</PreviewCard>
</li>

<style>
	.grid {
		display: grid;
		grid-template-columns: 3fr 2fr;
		align-items: center;
		gap: 0.25rem;
	}

	.teaser,
	.date {
		color: var(--secondary-font-color);
		margin-bottom: 0.5rem;
	}
</style>
