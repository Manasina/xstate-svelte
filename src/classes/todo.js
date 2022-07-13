import { todos } from '../store/todos-store.js';

export default class Todo {
	static todos_list = todos;

	static changeStatus = (/** @type {number} */ id) => () => {
		todos.update((todo) =>
			todo.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	};

	static add = (/** @type {string} */ title) => () => {
		todos.update((todo) => [
			...todo,
			{
				id: todo.length + 1,
				title: title,
				completed: false
			}
		]);
	};
}
