// src/components/TodoList.tsx
import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  TextField,
  Box,
} from "@mui/material";
import { Todo } from "../types/types.ts";
import { Delete, Edit, Check, Save } from "@mui/icons-material";

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: number, name: string, description: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, updateTodo, completeTodo, deleteTodo }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEditStart = (id: number, name: string, description: string) => {
    setEditingId(id);
    setEditName(name);
    setEditDescription(description);
  };

  const handleEditSave = (id: number) => {
    updateTodo(id, editName, editDescription);
    setEditingId(null);
    setEditName('');
    setEditDescription('');
  };

  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          dense
          onClick={() => editingId === null && completeTodo(todo.id)}
          sx={{ flexDirection: 'column', alignItems: 'flex-start' }} // Align items in a column
        >
          {editingId === todo.id ? (
            <Box
              component="form"
              sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSave(todo.id);
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <TextField
                fullWidth
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                variant="outlined"
                size="small"
                label="Name"
                onClick={(e) => e.stopPropagation()}
              />
              <TextField
                fullWidth
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                variant="outlined"
                size="small"
                label="Description"
                onClick={(e) => e.stopPropagation()}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <IconButton
                  type="submit"
                  color="primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Save />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingId(null);
                  }}
                >
                  <Check />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <>
              <ListItemText
                primary={todo.name}
                secondary={todo.description}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                >
                  <Delete />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditStart(todo.id, todo.name, todo.description);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    completeTodo(todo.id);
                  }}
                >
                  <Check />
                </IconButton>
              </ListItemSecondaryAction>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;