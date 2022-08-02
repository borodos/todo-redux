import React from "react";

export const TodoItem = ({ id, text, completed, removeTodo, todoComplete }) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => todoComplete(id)}
			/>
			<span>{text}</span>
			<span className="delete" onClick={() => removeTodo(id)}>
				&times;
			</span>
		</li>
	);
};
