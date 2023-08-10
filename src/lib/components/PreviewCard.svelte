<script lang="ts">
	export let href: string;
</script>

<a {href}><slot /></a>

<style>
	a {
		text-decoration: none;
		display: block;
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--border-color);
	}

	a :global(.more) {
		font-size: var(--small-font);
		text-decoration: underline;
	}
</style>
