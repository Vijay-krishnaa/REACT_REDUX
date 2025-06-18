import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: 1, text: "hello" }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTOdo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const updatedTodo = state.todos.find((todo) => {
        if (updatedTodo) updatedTodo.text = newText;
      });
    },
  },
});
export const { addTodo, removeTOdo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
