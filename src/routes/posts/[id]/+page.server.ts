import fm from 'front-matter';
import { error } from '@sveltejs/kit';
import type { posts } from '../types';
import {
	highlight_code,
	add_ids_to_headings,
	get_table_of_contents,
	render_formulas,
	transform_external_links,
	render_markdown
} from '$lib/server';
import { compose } from '$lib/shared/util';

const posts_record = import.meta.glob('/src/data/posts/*.md', {
	as: 'raw',
	eager: true
});

export const load = async (event) => {
	const id = event.params.id;
	const path = `/src/data/posts/${id}.md`;

	if (!(path in posts_record)) {
		throw error(404, 'There is no post with this ID');
	}

	const markdown = posts_record[path];
	const { attributes: _attributes, body } = fm<Omit<posts, 'id'>>(markdown);
	const attributes: posts = { ..._attributes, id };

	const html_raw = render_markdown(body);

	const html_code = compose([
		render_formulas,
		transform_external_links,
		add_ids_to_headings,
		highlight_code
	])(html_raw);

	const toc = get_table_of_contents(html_raw);

	const { title, description } = attributes;
	const meta = { title, description };

	return { meta, attributes, html_code, toc };
};
