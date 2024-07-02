import React, { useState } from "react";
import {
  List,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  TextField,
  Box,
} from "@mui/material";
import StyledListItem from "../styles/StyledListItem";
import StyledForm from "../styles/StyledForm";
import { Todo } from "../types/types.ts";
import { Delete, Edit, Check, Save } from "@mui/icons-material";

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: number, name: string, description: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  updateTodo,
  completeTodo,
  deleteTodo,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const handleEditStart = (id: number, name: string, description: string) => {
    setEditingId(id);
    setEditName(name);
    setEditDescription(description);
  };

  const handleEditSave = (id: number) => {
    updateTodo(id, editName, editDescription);
    setEditingId(null);
    setEditName("");
    setEditDescription("");
  };

  return (
    <List>
      {todos.map((todo) => (
        <StyledListItem key={todo.id}>
          {editingId === todo.id ? (
            <StyledForm
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSave(todo.id);
              }}
            >
              <TextField
                fullWidth
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                variant="outlined"
                size="small"
                label="Name"
              />
              <TextField
                fullWidth
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                variant="outlined"
                size="small"
                label="Description"
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <IconButton type="submit" color="primary">
                  <Save />
                </IconButton>
              </Box>
            </StyledForm>
          ) : (
            <>
              <ListItemText
                primary={todo.name}
                secondary={todo.description}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  <Delete />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => {
                    handleEditStart(todo.id, todo.name, todo.description);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => {
                    completeTodo(todo.id);
                  }}
                >
                  <Check />
                </IconButton>
              </ListItemSecondaryAction>
            </>
          )}
        </StyledListItem>
      ))}
    </List>
  );
};

export default TodoList;
