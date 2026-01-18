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
  }
function editTodo(index) {
  const updated = prompt("Edit todo", todos[index]);
  if (!updated) return;

  setTodos(
    todos.map((item, i) =>
      i === index ? updated : item
    )
  );
}

  return( 
    <>
    <div className="w-screen h-screen bg-black place-items-center place-content-center">
      <div className="bg-white w-120 h-80 overflow-y-auto rounded-xl">
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
          
          <div className=" flex justify-between border-1 p-2 m-2">
          <li key={index} className="font-semibold rounded-md ">{item}</li>
          <button  onClick={() => editTodo(index)} className="cursor-pointer">edit</button>
          </div>
        ))
      }
     </ol>
      </div>
    </div>
   

    </>
  )
}

export default App;