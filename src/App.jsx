import React from "react";
import Todo from "./Todo.jsx";
import { Provider } from "react-redux";
import store from "../src/app/store.js";
import ControlledForm from "../ControlledForm.jsx";
function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>

      {/* <ControlledForm /> */}
    </>
  );
}

export default App;
