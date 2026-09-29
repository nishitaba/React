import {useState} from 'react'
export default function Form()
{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [msg,setMsg] = useState("");
    const [hobbies,setHobbies] = useState([]);
    
    const handleClick=(e)=>{
        e.preventDefault();
        if(username === "admin" && password === "123")
            setMsg("Login Successful");
        else
            setMsg("Invalid Username or Password");

    };
    const checkEvents=(e)=>{
        const {value,checked}=e.target;
        if(checked)
        {
            setHobbies([...hobbies,value]);
        }
        else
        {
            setHobbies(hobbies.filter((hobbie) => hobbie !== value));
        }
        
    }

    return(
        <div>
            <form onSubmit={handleClick}>
                <h1>Login App</h1>
                <label>Username:</label>
                <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br>
                 <label>Password:</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
                
                <input type="checkbox" value="cricket" onChange={checkEvents}/>cricket<br></br>
                <input type="checkbox" value="dancing" onChange={checkEvents}/>dancing<br></br>
                <input type="checkbox" value="music" onChange={checkEvents}/>music<br></br>

                <button type="submit">Login</button>
            </form>
            <h2>{msg}</h2>
            <h3>
                Selected:
                {hobbies.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </h3>
        </div>
    );
}