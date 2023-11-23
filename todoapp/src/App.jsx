
import { useState } from 'react';
import './App.css';
import Todo from './components/ToDo';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const addTodo=()=>{
    if(todo !==""){
    setTodos([...todos,todo])
    setTodo("")
    }
  }

  const deletetodo=(text)=>{
    const newtodos=todos.filter((todo)=>{
      return todo !== text
    })
    setTodos(newtodos)
  }
  return (
    <div className="App">
      <div>
     <input type="text"  value={todo} placeholder='Enter' onChange={(e)=>setTodo(e.target.value)} />
     <button className='btn' onClick={addTodo}>Add</button>
     </div>

      <Todo list={todos} remove={deletetodo}/>
    </div>
  )
}

export default App;
