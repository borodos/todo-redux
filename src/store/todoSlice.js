import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		todos: [],
	},
	reducers: {
		addTodo(state, action) {
			console.log(state);
			console.log(action);
			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			});
		},
		removeTodo(state, action) {},
		todoComplete(state, action) {},
	},
});

export const { addTodo, removeTodo, todoComplete } = todoSlice.actions;

export default todoSlice.reducer;
