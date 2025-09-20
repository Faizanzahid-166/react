
import './App.css'
import Addtodo from "./components/Addtodo";
import Todo from './components/Todo'

function App() {

  return (
    <div className='w-1/2 bg-gray-700 bg-opacity-20 rounded-lg m-auto mt-20 p-7'>
    <Addtodo/>
    <Todo/>
    </div>
  )
}

export default App
