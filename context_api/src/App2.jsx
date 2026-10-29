import {useRef} from 'react'
import './App.css'

export default function App2()
{
    const inputRef=useRef(null);
    return(
        <div>
            <input type='text' ref={inputRef} defaultValue="MCA" />
            <button onClick={()=>inputRef.current.focus()}>focus</button>
        </div>
    );
}