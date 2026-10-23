import { useState } from 'react'


function App() {
  const [task,setTask]=useState("");
  const [tasks, setTasks]=useState([]);

  const handleClick=()=>
  {
    if(task.trim()==="")
      return

    setTasks([...tasks,{text: task, completed: false}]);
    setTask("");
  }

  const countCompleted = tasks.filter((item)=>item.completed).length;
  function toggleTask(index)
  {
    setTasks(
      tasks.map((item,i)=> i === index ? {...item,completed: !item.completed}:item)
    );
  }
  return (
    <>
      <h1> Task Manager Application</h1>
      <label> Enter Task:<input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      </label>
      <button onClick={handleClick}>Add Task</button>

      <h3>Task List</h3>
      {
        tasks.map((item,index)=>(
          <li key={index}>
            <input type='checkbox' checked={item.completed} onChange={()=>toggleTask(index)}/>
            <span style={{textDecoration: item.completed? "line-through": "none"}}>
            {item.text}
            </span>
          </li>
        ))
      }

      <h2>Completed Tasks: {countCompleted}</h2>

    </>
  )

}

export default App
