import fm from 'front-matter';
import { error } from '@sveltejs/kit';
import type { project } from '../types';

const posts_record = import.meta.glob('/src/data/posts/*.md', {
	as: 'raw',
	eager: true
});

import markdownit from 'markdown-it';
const md = new markdownit();

export const load = async (event: { params: { id: any } }) => {
	const id = event.params.id;
	const path = `/src/data/posts/${id}.md`;

	if (!(path in posts_record)) {
		throw error(404, 'There is no project with this ID');
	}

	const markdown = posts_record[path];
	const { attributes: _attributes, body } = fm<Omit<project, 'id'>>(markdown);
	const attributes: project = { ..._attributes, id };

	const html_code = md.render(body);

	const meta = {
		title: attributes.name,
		description: attributes.teaser
	};

	return { meta, attributes, html_code };
};
