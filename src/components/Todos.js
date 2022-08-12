import React from 'react'
import Todo from './Todo'

const todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3 text-center'>Todo List</h3>
      {props.todos.length === 0 ? "No todo items" : props.todos.map((todo) => {
        return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
      })}
    </div>
  )
}

export default todos
