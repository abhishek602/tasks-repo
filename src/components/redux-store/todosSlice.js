import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "buy",
      description: "buy new car",
      isCompleted: true,
    },
    {
      id: 2,
      title: "sell",
      description: "sell old stuffs",
      isCompleted: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      // Generate a unique ID using Date.now().
      const newTodo = {
        id: Date.now(),
        ...action.payload.todo,
      };

      state.push(newTodo);
    },

    checkToDo: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      if (todoIndex !== -1) {
        // Toggle the isCompleted field
        state[todoIndex].isCompleted = !state[todoIndex].isCompleted;
      }
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    clearTodos: () => {
      return [];
    },

    markAllTodosCompleted: (state) => {
      state.forEach(todo => {
        todo.isCompleted = true;
      });
    },
  },
});

export const { addTodo, removeTodo, clearTodos, checkToDo,markAllTodosCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
