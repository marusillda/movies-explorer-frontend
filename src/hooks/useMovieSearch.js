import { useState, useEffect } from 'react';
import { SHORT_MOVIE_MAX_DURATION } from '../utils/constants';

export function useMovieSearch() {
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [shortMoviesOnly, setShortMoviesOnly] = useState(false);

    const searchMatches = (text, searchPhrase) => {
        const searchWords = searchPhrase
            .toLowerCase()
            .split(' ')
            .filter(word => word);
        const uniqueWords = [...new Set(searchWords)];
        text = text.toLowerCase();
        return uniqueWords.some(word => text.includes(word));
    }

    useEffect(() => {
        if (movies.length === 0) {
            setSearchResults([]);
            return;
        }
        const filterBySearchText = movie => !searchText || searchMatches(movie.nameRU, searchText) || searchMatches(movie.nameEN, searchText);
        const filterByShowMoviesOnly = movie => !shortMoviesOnly || movie.duration <= SHORT_MOVIE_MAX_DURATION;
        const filteredMovies = movies
            .filter(filterBySearchText)
            .filter(filterByShowMoviesOnly);

        setSearchResults(filteredMovies);
    }, [movies, searchText, shortMoviesOnly]);

    return { movies, searchText, shortMoviesOnly, searchResults, setMovies, setSearchResults, setSearchText, setShortMoviesOnly };
};