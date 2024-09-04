import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import './styles.css'
import { TodoList } from './TodoList'

// Functions with Capital letter variables are called Components
export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  
  // Won't lose data upon refreshing. Stores locally
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false},
      ] 
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    // Fragment (<>) allows us to return multiple elements within same component, which is otherwise not possilble
    <> 
      <h1 align="center">To-Do App!</h1>
      <br/>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>To-Do:</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
