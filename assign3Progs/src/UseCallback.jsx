import {useState,useCallback,memo} from 'react'

const IncrementButton = memo(({handleClick,buttonName})=>{
    console.log(`child [${buttonName}] rendered`);
    return(
        <button onClick={handleClick}>Increment {buttonName}</button>
    );
});

export default function UseCallback()
{
    const [countA , setCountA] = useState(0);
    const [countB , setCountB] = useState(0);

    const incrementA = () =>{
        setCountA((prev)=>prev+1);
    };

    const incrementB = useCallback(()=>{
        setCountB((prev)=>prev+1);
    },[]);

    return(
        <div>
            <h2>Passing Functions as Props Example</h2>
            <div>
                <p>Count A: {countA}</p>
                <IncrementButton handleClick={incrementA} buttonName="A"/>
            </div>

            <div>
                <p>Count B: {countB}</p>
                <IncrementButton handleClick={incrementB} buttonName="B"/>
            </div>
        </div>
    );

}