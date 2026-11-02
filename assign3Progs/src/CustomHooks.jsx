import useToggle from './useToggle.jsx'
export default function CustomHooks()
{
    const {isOn,toggle}=useToggle();
    return(
        <>
            <h1>Custom Hooks</h1>
            <h2>Status: {isOn?"ON":"OFF"}</h2>
            <button onClick={toggle}>{isOn?"Turn Off":"Turn on"}</button>
        </>
    );
}