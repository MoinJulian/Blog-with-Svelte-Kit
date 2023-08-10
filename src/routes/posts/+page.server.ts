import type { posts } from './types';
import { get_frontmatter } from '$lib/server/frontmatter';

export const load = async () => {
	const unsorted_posts = get_frontmatter<posts>(
		import.meta.glob('/src/data/posts/*.md', {
			as: 'raw',
			eager: true
		})
	);

	const posts = unsorted_posts.sort((p, q) => q.date.getTime() - p.date.getTime());

	const year_list = unsorted_posts.map((p) => p.date.getFullYear());
	const years = [...new Set(year_list)].sort();

	const meta = {
		title: 'MoinJulian - posts',
		description: 'Find out about my personal posts in web development'
	};

	return { meta, posts, years };
};
