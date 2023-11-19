import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [latestMovies, setLatestMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    console.log(movies)
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const apiKey = '6e1b9adb4606433ebcb6e990914ee58c';
                const response = await fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch genres');
                }

                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        const fetchMovies = async () => {
            try {
                const apiKey = '6e1b9adb4606433ebcb6e990914ee58c';

                // Fetch movies with the selected genre
                const genreResponse = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`
                );

                if (!genreResponse.ok) {
                    throw new Error('Failed to fetch movies by genre');
                }

                const genreData = await genreResponse.json();
                setMovies(genreData.results);

                // Fetch the latest movies
                const latestResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
                );

                if (!latestResponse.ok) {
                    throw new Error('Failed to fetch latest movies');
                }

                const latestData = await latestResponse.json();
                setLatestMovies(latestData.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchGenres();
        fetchMovies();
    }, [selectedGenre]);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div>
            <h1>Popular Movies</h1>
            <label htmlFor="genre">Select Genre:</label>
            <select id="genre" onChange={handleGenreChange} value={selectedGenre}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>

            <h2>Movies by Selected Genre</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => handleMovieClick(movie)}>
                        {movie.title}
                    </li>
                ))}
            </ul>

            <h2>Latest Movies</h2>
            <ul>
                {latestMovies.map((movie) => (
                    <li key={movie.id} onClick={() => handleMovieClick(movie)}>
                        {movie.title}
                    </li>
                ))}
            </ul>

            {selectedMovie && (
                <div>
                    <h2>Selected Movie: {selectedMovie.title}</h2>
                    <ReactPlayer playing url={`https://www.youtube.com/watch?v=${selectedMovie.key}`} controls />
                </div>
            )}
        </div>
    );
};

export default MovieList;
