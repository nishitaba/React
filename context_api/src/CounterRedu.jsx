import {useReducer} from 'react'
function redFun(state,action)
{
    switch(action.type)
    {
        case 'inc':
            return {count:state.count + 1}
        case 'dec':
            return {count:state.count - 1}
    }
}
export default function CounterRedu()
{
    const[state , dispatch] = useReducer(redFun,{count:0});
    return(
        <div>
            <p> Value of Counter is: {state.count}</p>
            <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
            <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
        </div>
    ) ;
}