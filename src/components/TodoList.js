import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build Todo App",
    "Push to GitHub"
  ]);

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  );
}

export default TodoList;
