import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		// Favicon-Einstellungen hinzufügen
		files: {
			assets: 'static' // Hier den Pfad zu deinem statischen Verzeichnis eintragen
		}
	}
};

export default config;
