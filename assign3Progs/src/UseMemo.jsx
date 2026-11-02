import {useState,useMemo} from 'react'

export default function UseMemo()
{
    const [numbers,setNumbers] = useState([10,43,56,89,90]);
    const [count,setCount] = useState(0);

    const maxNum = useMemo(()=>{
        console.log("Finding highest number...")
        return Math.max(...numbers);
    },[numbers]);

    return(
        <div style={{padding:'20px'}}>
            <h2>React Performance Optimization</h2>
            <p>Numbers: {numbers.join(', ')}</p>
            <p>
                Highest Number in List: <strong>{maxNum}</strong>
            </p>

            <button onClick={()=>setNumbers([...numbers,560])}>
                Add 560
            </button>
            <br></br>

            <p>Counter: {count}</p>
            <button onClick={()=>setCount(count+1)}>
                    Increase Counter
            </button>
    
        </div>
    );
}