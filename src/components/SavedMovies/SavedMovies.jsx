import './SavedMovies.css';
import { useContext, useEffect, useState, useMemo } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import {
    FIRST_TIP_SAVED_MOVIES_MESSSAGE,
    SEARCH_NOT_FOUND_MESSAGE,
    SEARCH_SHORT_MOVIES_NOT_FOUND_MESSAGE,
} from '../../utils/constants';

export default function SavedMovies() {
    const { savedMovies } = useContext(SavedMoviesContext);
    const { searchResults, shortMoviesOnly, setMovies, setSearchText, setShortMoviesOnly } = useMovieSearch();
    const emptySearchResults = useMemo(() => searchResults.length === 0, [searchResults]);
    const emptySavedMovies = useMemo(() => savedMovies.length === 0, [savedMovies]);
    const [userMessage, setUserMessage] = useState(FIRST_TIP_SAVED_MOVIES_MESSSAGE);

    useEffect(() => {
        setMovies(savedMovies);
        // eslint-disable-next-line
    }, [savedMovies])

    useEffect(() => {
        if (emptySavedMovies) {
            setUserMessage(FIRST_TIP_SAVED_MOVIES_MESSSAGE);
            return;
        }
        if (emptySearchResults) {
            if (shortMoviesOnly) {
                setUserMessage(SEARCH_SHORT_MOVIES_NOT_FOUND_MESSAGE);
            } else {
                setUserMessage(SEARCH_NOT_FOUND_MESSAGE);
            }
        }
    }, [emptySearchResults, emptySavedMovies, shortMoviesOnly])

    const onSearchClicked = (searchText, shortMoviesOnly) => {
        setSearchText(searchText);
        setShortMoviesOnly(shortMoviesOnly);
    }

    return (
        <section className="savedmovies" aria-label="Сохраненные фильмы">
            <SearchForm onSearchClicked={onSearchClicked} />
            {emptySearchResults
                ?
                <span className="savedmovies-message">{userMessage}</span>
                :
                <MoviesCardList movies={searchResults} showAddToSavedButton={false} />}
        </section>
    )
}