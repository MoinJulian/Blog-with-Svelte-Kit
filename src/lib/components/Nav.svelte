<script lang="ts">
	import { page } from '$app/stores';

	import ThemeToggler from './ThemeToggler.svelte';

	import Fa from 'svelte-fa';
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import { faBookOpenReader, faCircleQuestion, faHouse } from '@fortawesome/free-solid-svg-icons';

	type link = {
		name: string;
		href: string;
		icon: IconDefinition;
	};

	const links: link[] = [
		{ name: 'Home', href: '/', icon: faHouse },
		{ name: 'Posts', href: '/posts', icon: faBookOpenReader },
		{ name: 'About', href: '/about', icon: faCircleQuestion }
	];
</script>

<nav>
	<ul class="no-bullets">
		{#each links as { name, href, icon }}
			<li class:current={$page.url.pathname === href}>
				<a {href}>
					<Fa {icon} />
					<span class="name">{name}</span>
				</a>
			</li>
		{/each}
		<li>
			<ThemeToggler />
		</li>
	</ul>
</nav>

<style>
	nav {
		padding-block: 1rem;
		border-bottom: 1px solid var(--border-color);
		position: sticky;
		top: 0;
		background-color: var(--bg-color);
		box-shadow: 0rem -2rem 0rem 2rem var(--bg-color);
		z-index: 1;
	}

	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	a {
		text-decoration: none;
	}

	li {
		position: relative;
		display: flex;
		align-items: center;
		padding-block: 0.1rem;
	}

	li.current::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -0.15rem;
		height: 0.1rem;
		background-color: var(--accent-color);
		border-radius: 100vw;
	}

	li:not(.current) .name {
		/* visually hidden */
		position: absolute;
		left: -100000px;
	}

	/* .name {
		font-size: var(--small-font);
	} */

	@media (max-width: 38rem) {
		nav {
			padding-block: 0.5rem;
		}

		li:not(.current) .name {
			/* visually hidden */
			position: absolute;
			left: -100000px;
		}
	}
</style>
