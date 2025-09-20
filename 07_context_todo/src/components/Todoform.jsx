import React, { useState } from 'react'
import { useTodo } from "../context/TodoContext";

function Todoform() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text" 
         placeholder='todo'
        className='w-full border rounded-2xl p-2 outline-none duration-150 bg-white/20'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />

        <button type='submit' className=' bg-sky-400 rounded-2xl hover:bg-sky-500 p-3 shrink-0'>
          add-Todo
        </button>
    </form>
  )
}

export default Todoform
