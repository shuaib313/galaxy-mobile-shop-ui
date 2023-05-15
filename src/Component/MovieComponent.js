import { movies } from "../data/movies";
import Movie from "./Movie";
import '../style/movie.css'
const fetchMovieData = () => {
    return movies;
}
const MovieComponent = () => {
    const movieData = fetchMovieData();
    return (
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent;