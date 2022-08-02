import "./App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";

function App() {
	const [text, setText] = useState("");

	const removeTodo = (todoId) => {
		// setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	const todoComplete = (todoId) => {
		// setTodos(
		// 	todos.map((todo, index, array) => {
		// 		if (todoId !== todo.id) return todo;
		// 		return {
		// 			...todo,
		// 			completed: !todo.completed,
		// 		};
		// 	})
		// );
	};

	return (
		<div className="App">
			<InputField text={text} handleInput={setText} handleSubmit={addTodo} />
			<TodoList />
		</div>
	);
}

export default App;
