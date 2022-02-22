import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import EmployeeList from "./EmployeeList";

const LOCAL_STORAGE_KEY = "todoApp.todos"
function App() {
  const [todos, setTodos] = useState([])
  const [textValue, setTextValue] = useState("")

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  const HandleNewTodo = () => {
    if (textValue === '' || textValue === null) {
      alert("Todo needs a name!")
    }
    else {
      let newTodo = { id: todos.length + 1, name: textValue, complete: false }
      setTodos(prevList => {
        return [...prevList, newTodo];
      })
      setTextValue("");
    }
  }

  function RemoveTodo(id) {
    const newTodos = [...todos]
    setTodos(newTodos.filter(todo => todo.id !== id))
  }

  function HandleClearButton() {
    const notCompletedTodos = todos.filter(todo => todo.complete === false)
    setTodos(notCompletedTodos);
  }

  return (
    <>
      <EmployeeList />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={RemoveTodo} />
      <input type="text" value={textValue} onChange={(newValue) => { setTextValue(newValue.target.value) }} />
      <button onClick={HandleNewTodo}>Add Todo</button>
      <button onClick={HandleClearButton}>Clear</button>
      <div>{todos.filter(todos => !todos.complete).length} left to do</div>
    </>
  );
}

export default App;
