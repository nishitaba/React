import {useState} from 'react'
import MovieCard from './MovieCard'

export default function MemoHoc()
{
    const [count,setCount]=useState(0);
    return(
        <>
            <h2>Parent Counter: {count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increase Counter</button>
            <MovieCard title="Inception" releasedyear={1994}></MovieCard>
        </>
    );
}