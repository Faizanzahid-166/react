import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../feature/todo/TodoSlice'

function Addtodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')

    }
  return (
    
    
      <form onSubmit={addTodoHandler}>
        <div className='ml-5 flex  flex-cols  items-center'>
        <input type="text" placeholder='enter a todo...' 
               value={input} onChange={(e) => setInput(e.target.value)} 
               className='w-9/12 bg-blue-950 border rounded-2xl p-2 m-1 outline-none duration-150 text-cyan-50'/>
        
        <button type='submit' className='bg-green-700 hover:bg-green-600 rounded-xl px-1 py-2 text-sm'>
            Add_Todo
        </button>
        </div>

      </form>
  

  
  )
}

export default Addtodo
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addTodo } from '../feature/todo/TodoSlice'

// function Addtodo() {
//   const [input, setInput] = useState('')
//   const dispatch = useDispatch()

//   const addTodoHandler = (e) => {
//     e.preventDefault()
//     if (!input.trim()) return
//     dispatch(addTodo(input))
//     setInput('')
//   }

//   return (
//     <div>
//     <form onSubmit={addTodoHandler}>
//       <input
//         className='w-9/12 border rounded-2xl p-2 m-1 outline-none duration-150 bg-white/20'
//         type="text"
//         placeholder="Enter a todo..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button type="submit" className='bg-green-600 hover:bg-green-500 px-2 py-1.5 rounded-xl m-auto ml-5 '>
//         Add Todo
//       </button>
//     </form>
//     </div>
//   )
// }

// export default Addtodo

