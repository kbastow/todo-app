import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

   interface TodoItem {
        id: string;
        text: string;
        completed: boolean;
      }

   const TodoApp = () => {
     const [todos, setTodos] = useState<TodoItem[]>([]);
     const [newTodo, setNewTodo] = useState('');

     const addTodo = () => {
       if (newTodo !== '') {
         const newId = crypto.randomUUID();
         const newTodoItem: TodoItem = {
           id: newId,
           text: newTodo,
           completed: false,
         };
         setTodos([...todos, newTodoItem]);
         setNewTodo('');
       }
     };

     const removeTodo = (id: string) => {
       const updatedTodos = todos.filter((todo) => todo.id !== id);
       setTodos(updatedTodos);
     };

     const toggleComplete = (id: string) => {
       const updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
           return { ...todo, completed: !todo.completed };
         }
         return todo;
       });
       setTodos(updatedTodos);
     };

     return (
      <React.Fragment>
        <CssBaseline />
       <div>
         <h1>Todo App</h1>
         <input
           type="text"
           value={newTodo}
           onChange={(e) => setNewTodo(e.target.value)}
         />
         <Button variant='contained' onClick={addTodo}>Add Todo</Button>
         <ul>
           {todos.map((todo) => (
             <li key={todo.id}>
               <input
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => toggleComplete(todo.id)}
               />
               <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                 {todo.text}
               </span>
               <button onClick={() => removeTodo(todo.id)}>Remove</button>
             </li>
           ))}
         </ul>
       </div>
       </React.Fragment>
     );
   };

   export default TodoApp;