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
    const { searchResults, shortMoviesOnly, setSearchResults, setMovies, setSearchText, setShortMoviesOnly } = useMovieSearch();
    const [userSearch, setUserSearch] = useState({
        searchText: '',
        shortMoviesOnly: false
    });
    const emptySearchResults = useMemo(() => searchResults.length === 0, [searchResults]);
    const [userMessage, setUserMessage] = useState(FIRST_TIP_SAVED_MOVIES_MESSSAGE);


    useEffect(() => {
        setMovies(savedMovies);
        setSearchResults(savedMovies);
        // eslint-disable-next-line
    }, [savedMovies])

    useEffect(() => {
        emptySearchResults &&
            (shortMoviesOnly ? setUserMessage(SEARCH_SHORT_MOVIES_NOT_FOUND_MESSAGE) : setUserMessage(SEARCH_NOT_FOUND_MESSAGE));
        // eslint-disable-next-line
    }, [searchResults])

    const onSearchClicked = (searchText, shortMoviesOnly) => {
        setSearchText(searchText);
        setShortMoviesOnly(shortMoviesOnly);
        setUserSearch({ searchText, shortMoviesOnly });
    }

    return (
        <section className="savedmovies" aria-label="Сохраненные фильмы">
            <SearchForm onSearchClicked={onSearchClicked} savedSearch={userSearch} />
            {emptySearchResults
                ?
                <span className="savedmovies-message">{userMessage}</span>
                :
                <MoviesCardList movies={searchResults} showAddToSavedButton={false} />}
        </section>
    )
}