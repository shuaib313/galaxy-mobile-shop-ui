

const Movie = ({ movie }) => {
    return (
        <li key={movie.id} className="movie">
            <img src={movie.poster}
                alt={movie.title}
                height='400px'
                width='250px' />
            <p>{movie.title}  by {movie.director}
                was released on {movie.year}</p>
            <p>Rating: {movie.rating}</p>
        </li>
    )
}

export default Movie;