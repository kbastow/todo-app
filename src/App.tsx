import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
  const { todos, addTodo, updateTodo, completeTodo, deleteTodo } = useTodos();

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h1" gutterBottom>
        My Todo List
      </Typography>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default App;