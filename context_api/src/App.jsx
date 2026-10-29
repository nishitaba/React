import {useState , createContext, useContext} from 'react'
import './App.css'

const myContext = createContext();
function Comp1()
{
  const {setData} = useContext(myContext);
  return(<button onClick={()=>setData("From context")}>setData</button>)
}

function Comp2()
{
  const {data}=useContext(myContext);
  return(
    <p>
      {data}
    </p>
  );
}

export default function App(){
  const [data,setData] = useState("MCA");
  return(
    <div>
      <myContext.Provider value={{data,setData}}>
        <Comp1></Comp1>
        <Comp2></Comp2>
      </myContext.Provider>
    </div>
  );
}