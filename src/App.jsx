import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoCard from "./components/TodoCard"

function App() {
  const [todos, setTodos]=useState([
  ])

  const [todoValue, setTodoValue]=useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    const newArray=[...todos, newTodo]
    persistData(newArray)
    setTodos(newArray)
  }

  function handleDelete(index){
    const newArray=todos.filter((todo, todoIndex)=>{
      return todoIndex!==index
    })
    persistData(newArray)
    setTodos(newArray)
  }

  function handleEdit(index){
    const valueToBeEdited=todos[index]
    setTodoValue(valueToBeEdited)
    handleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[todos])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} TodoInput={TodoInput} setTodoValue={setTodoValue} todoValue={todoValue}/>
      <TodoList handleDelete={handleDelete} todos={todos} handleEdit={handleEdit}/>
    </>
  )
}

export default App
