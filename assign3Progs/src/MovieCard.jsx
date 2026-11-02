import {memo} from 'react'

const MovieCard = memo(
    function MovieCard({title,releasedyear})
    {
        console.log('MovieCard redered');
        return(
            <div>
                <h3> Movie Title: {title}</h3>
                <p>Released year: {releasedyear}</p>
            </div>
        );
    }
);
export default MovieCard