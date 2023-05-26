import React, { useEffect, useRef, useState } from 'react'
import Todolist from "./Todolist"
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App () {
  //const [todos, setTodos] = useState([ {id: 1, name: 'todo1', complete: false} ])
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  
  
 useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
 
      setTodos(prevTodos => {
       return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
      })
    
  
    console.log(name)
    
  }
  
  return (
    <>
      <Todolist todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App