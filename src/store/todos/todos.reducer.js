import { ADD_TODO, REMOVE_TODO } from "./todos.types";

const initialState = [
  'furkan'
]

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			// ['furkan', 'zeynep', 'ali']
			// addTodo('merve')
			// ['furkan', 'zeynep', 'ali', 'merve'];
			return [...state, action.text];
		case REMOVE_TODO:
			// removeTodo('furkan')'
			// ['furkan', 'zeynep', 'ali', 'merve'];
			// indefOf('furkan') === 0
			// splice(0, 1);
			// ['zeynep', 'ali', 'merve'];
			const newState = [...state];
			const indexOf = newState.indexOf(action.text);
			newState.splice(indexOf, 1);

			return newState;
		default:
			return state;
	}
};

export default todosReducer;
