import { writable } from 'svelte/store';

export const active_filter = writable<{
	tags: string[];
	years: number[];
}>({ tags: [], years: [] });

export const filters_expanded = writable<boolean>(false);
