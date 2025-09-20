// import { useSelector, useDispatch } from 'react-redux'
// import {removeTodo,updateTodo } from '../feature/todo/TodoSlice'
// import { useState } from 'react'


// function Todo() {
//    const todos = useSelector((state) => state.todos)
//    const dispatch = useDispatch()

//    const [editId, setEditId] = useState(null);
//    const [editText, setEditText] = useState('');

//    const handleSave = (id) => {
//     dispatch(updateTodo({ id, newText: editText }));
//     setEditId(null);
//     setEditText('');
//   };

//   return (
//     <div>

//         {todos.map((todo) => (
//           <div  key={todo.id} className='flex  flex-cols  items-center'>

//             <li className='w-9/12 border rounded-2xl p-1 m-1 outline-none duration-150 bg-white/20 ' >
//               {todo.text}
//             </li>

//             <button className='bg-red-700 hover:bg-red-600 rounded-xl ml-1 px-1 py-2 ' onClick={() => dispatch(removeTodo(todo.id))}>
//                delete
//             </button>

//             <button  className='bg-blue-700 hover:bg-blue-600 rounded-xl ml-1 px-2 py-2'>
//                edit
//             </button>

//           </div>))}
//     </div>
//   )
// }

// export default Todo


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todo/TodoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSave = (id) => {
    dispatch(updateTodo({ id, newText: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <div className='grid gap-2'>

      {todos.map((todo) => (
        <div className='grid grid-cols-6 items-center gap-2' key={todo.id}>

          <div className='col-span-4'>
            {editId === todo.id ? (
              <input
                className='w-full p-1 rounded'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <li className='p-1'>{todo.text}</li>
            )}
          </div>

          <div className='col-span-2 flex gap-1'>
            {editId === todo.id ? (
              <button
                className='bg-green-600 text-white rounded px-2 py-1'
                onClick={() => handleSave(todo.id)}
              >
                Save
              </button>) 
              : (
              <button
                className='bg-blue-600 text-white rounded px-2 py-1'
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
            )}
            
            <button
              className='bg-red-600 text-white rounded px-2 py-1'
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
