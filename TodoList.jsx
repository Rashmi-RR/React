import { TodoItem } from "./TodoItem"

export function TodoList( { todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {/* Curly brackets runs as JS code and places anything it returns right in here */}
      {todos.length === 0 && "No To-do's!"}
      {todos.map(todo => {
        return (
          <TodoItem 
            {...todo}
            // id={todo.id} 
            // completed={todo.completed} 
            // title={todo.title} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}