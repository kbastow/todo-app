import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </Box>
  );
};

export default TodoInput;