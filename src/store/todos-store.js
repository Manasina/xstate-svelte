import { writable } from 'svelte/store';
export const todos = writable([
	{
		id: 1,
		title: 'Learn Svelte',
		completed: true
	},
	{
		id: 2,
		title: 'Learn React',
		completed: false
	},
	{
		id: 3,
		title: 'Learn Vue',
		completed: false
	}
]);
