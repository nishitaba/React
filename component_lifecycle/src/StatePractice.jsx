import {useState} from 'react'
export default function StatePractice()
{
    const [count,setCount] = useState(0);
    const counterClick = ()=>{
        setCount(count+1);
    }
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={counterClick}>Click Here</button>
        </div>
    );
}