import React,{useState, useContext} from  'react';
import Usercontext from "../context/Usercontext";

function Login() {

const [username,setusername] = useState('')
const [password,setpassword] = useState('')


const {setuser, setError} = useContext(Usercontext)

    // const handlesubmit = (e) => {
    //     e.preventDefault()
    //     setuser({username, password})
    // }

    
  const handlesubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Insert name and password");
      return;
    }

    setError(""); // clear previous error
    setuser({ username, password });
  };


    return(
        <>
        <div className='w-1/2 m-auto mt-20 p-6 bg-gray-400 rounded-2xl '>
        <h2 className='text-center text-3xl'>Login</h2>
        <div className='flex flex-col items-center'>

        <input type="text" placeholder="username" value={username} onChange={(e) => setusername(e.target.value)}
               className='w-50 h-7 bg-gray-700 text-white border-0 rounded-md p-2 mt-4 focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150 placeholder-gray-300'/>

        <input type="text" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}
                className='w-50 h-7 bg-gray-700 text-white border-0 rounded-md p-2 mt-1 focus:bg-gray-600 focus:outline-none 
                transition ease-in-out duration-150 placeholder-gray-300'/>

                
                 <button onClick={handlesubmit} className='text-sm bg-violet-700 px-3 py-2 m-auto flex flex-wrap items-center mt-5 rounded-2xl'>submit</button>
         
        </div>

       
        </div>
        </>

    )
}

export default Login