import { useState } from "react";
import { Todo } from "../types/types.ts";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      name,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, name: string, description: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name, description } : todo
      )
    );
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, updateTodo, completeTodo, deleteTodo };
};

export default useTodos;
