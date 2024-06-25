import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import StyledForm from '../styles/StyledForm.ts';

interface TodoInputProps {
  addTodo: (name: string, description: string) => void;
}


const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      addTodo(name, description);
      setName('');
      setDescription('');
    }
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit}>
      <TextField
        label="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <Button type="submit">
        Add
      </Button>
    </StyledForm>
  );
};

export default TodoInput;