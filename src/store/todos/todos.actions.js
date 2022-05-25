import { ADD_TODO, REMOVE_TODO } from "./todos.types";

export const addTodo = (text) => ({
	type: ADD_TODO,
	text,
});

export const removeTodo = (text) => ({
	type: REMOVE_TODO,
	text,
});
