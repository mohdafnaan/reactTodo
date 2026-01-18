import { useState } from "react";
function App () {
  const [todo , setTodo] = useState("");
  const [todos , setTodos] = useState([]);

  function addTodo () {
    if (todo == ""){
      return;
    }
    setTodos([...todos,todo])
    setTodo("")
    console.log(todos);
  }

  return( 
    <>
    <div className="w-screen h-screen bg-black place-items-center place-content-center">
      <div className="bg-white  w-120 h-80 rounded-xl">
      <h1 className="font-bold p-1 pl-3">TO-DO LIST</h1>
     <div>
      <input type="text" value = {todo} onChange={(e)=>{
        setTodo(e.target.value)
      }}    
      placeholder="Add a task" 
      className="w-80 p-2 ml-13"/>
      <button 
      onClick={addTodo} className="bg-blue-500 rounded-xl m-2 p-2 text-white cursor-pointer">Add</button>
      <hr className="border-b-4 border-indigo-500 mx-13"/>
     </div>
     <ol className="flex flex-col p-2 m-2 ">
      {
        todos.map((item,index)=>(
          
          // <div className="border-1 p-2 m-2">
          <li key={index} className="font-semibold border-1 rounded p-2 m-2">{item}</li>

          // </div>
        ))
      }
     </ol>
      </div>
    </div>
   

    </>
  )
}

export default App;