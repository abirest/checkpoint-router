import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'
import '../App.css'

const MovieList = ({movies, filterTitle, filterRating}) => {
    return (
        <div style={{display: "flex", alignContent: "center", justifyContent: "space-around" , flexWrap: "wrap"}}>
            {movies
            .map((movie) => (
                <div className="movie-det" key={movie.id} >
                <Link to={`/${movie.id}`}>
                <MovieCard key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
          videoURL={movie.videoURL} />
                </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
