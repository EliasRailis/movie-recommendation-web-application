import React, {useState, useEffect} from 'react';

const MoviesList = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44301/api/movies")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(result);
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if(error){
        return <div>Error: {error.message}</div>
    } else if(!isLoaded){
        return <div>Loading...</div>
    } else{
        return(
            <div className="movies-container">
                <ul className="movie-list">
                    {movies.map(movie => (
                        <li className="movie-list-style" key={movie.Id}>
                            <div className="movie-name">{movie.name}</div>
                            <div className="movie-year">{movie.year}</div>
                            <div className="movie-director">by {movie.director}</div>
                            <div className="movie-desc">{movie.description}</div>
                            <div className="movies-category">Category: {movie.category}</div>
                            <img className="movie-img" src={movie.imageUrl} alt={movie.name + "image"}></img>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default MoviesList;