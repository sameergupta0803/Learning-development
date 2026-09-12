import { useState } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <ListItem>
        <TextField
          onChange={handleChange}
          value={text}
          label="Add Todo"
          placeholder="Describe Todo"
          sx={{ m: 1, width: "25ch" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Todo list description" type="submit">
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </ListItem>
    </form>
  );
}
