import { makeScreenSizeStore } from 'svelte-window-stores/viewport';

export const screenSize = makeScreenSizeStore({
	names: ['xs', 'sm', 'md', 'lg'],
	thresholds: [320, 768, 1200],
});
