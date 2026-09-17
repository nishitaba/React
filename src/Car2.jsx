export default function Car2(props)
{
    return(
        <h3>
            Name:{props.name}<br/><br/>
            Model:{props.model}<br/><br/>
            Year:{props.year}<br/><br/>
            Description: {props.children}
        </h3>
    );
}