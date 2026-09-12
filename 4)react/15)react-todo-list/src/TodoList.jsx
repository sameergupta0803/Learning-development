import { useState, useEffect } from "react";
import { List, Box ,Typography} from "@mui/material";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
const initialTodos = [
  { id: crypto.randomUUID(), text: "Walk the Dog", isCompleted: false },
  { id: crypto.randomUUID(), text: "Walk the Fish", isCompleted: false },
  { id: crypto.randomUUID(), text: "Walk the Cat", isCompleted: false },
  { id: crypto.randomUUID(), text: "Walk the Chicken", isCompleted: false },
];
export default function TodoList() {
  const getTodos = () => {
    const data = localStorage.getItem("Todos");
    if (!data) return [];
    return JSON.parse(data);
  };
  const [todos, setTodos] = useState(getTodos);
  const [checked, setChecked] = useState([0]);
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);
  const removeTodoItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };
  const handleToggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      });
    });
  };
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text, isCompleted: false },
      ];
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}
    >
      <Typography variant="h2" gutterBottom>
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={() => removeTodoItem(todo.id)}
            toggleTodo={() => handleToggle(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
