import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./store/todos/todos.actions";

function App() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	const [text, setText] = useState("");

	const handleChangeText = (event) => {
		setText(event.target.value);
	};

	const onClickSaveButton = () => {
		setText("");
		dispatch(addTodo(text));
	};

	const onClickTodo = (todo) => {
		dispatch(removeTodo(todo));
	};

	return (
		<div className="App">
			<label>
				TODO
				<input type="text" onChange={handleChangeText} value={text} />
			</label>
			<button onClick={onClickSaveButton}>KAYDET</button>
			<div className="TodosContainer">
				{todos.map((todo) => (
					<button onClick={() => onClickTodo(todo)}>
						<p>{todo}</p>
					</button>
				))}
			</div>
		</div>
	);
}

export default App;
