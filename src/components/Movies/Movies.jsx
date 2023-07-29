import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect, useMemo } from 'react';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import { useScreenResize } from '../../hooks/useScreenResize';
import { getLocalStorageUserSearch, setLocalStorageUserSearch } from '../../utils/localStorage';
import {
    FIRST_TIP_MESSSAGE,
    SEARCH_ERROR_MESSAGE,
    SEARCH_NOT_FOUND_MESSAGE,
    SEARCH_SHORT_MOVIES_NOT_FOUND_MESSAGE,
} from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

export default function Movies({ loadMovies, loadSavedMovies }) {
    const [userMessage, setUserMessage] = useState(FIRST_TIP_MESSSAGE);
    const [userSearch, setUserSearch] = useState({});
    const { movies, searchResults, searchText, shortMoviesOnly, setMovies, setSearchResults, setSearchText, setShortMoviesOnly } = useMovieSearch();
    const { isMobile, isTablet } = useScreenResize();
    const [showMoreClickedCounter, setShowMoreClickedCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const onSearchClicked = (searchText, shortMoviesOnly) => {
        let promise = Promise.resolve();
        if (movies.length === 0) {
            setIsLoading(true);
            promise = loadMovies()
                .then(setMovies)
                .catch(() => setUserMessage(SEARCH_ERROR_MESSAGE))
                .finally(() => setIsLoading(false));
        }

        promise.then(() => {
            setSearchText(searchText);
            setShortMoviesOnly(shortMoviesOnly);
        });
    }

    useEffect(() => {
        const { searchText, shortMoviesOnly, searchResults } = getLocalStorageUserSearch()
        setUserSearch({ searchText, shortMoviesOnly });
        setSearchResults(searchResults || []);
        // eslint-disable-next-line
    }, []);

    const pageSize = useMemo(() => {
        const baseSize = isMobile ? 5 : isTablet ? 8 : 12;
        const increment = isMobile ? 2 : isTablet ? 2 : 3;

        return baseSize + showMoreClickedCounter * increment;
    }, [isMobile, isTablet, showMoreClickedCounter]);
    const showMore = useMemo(() => searchResults.length > pageSize, [pageSize, searchResults]);
    const emptySearchResults = useMemo(() => searchResults.length === 0, [searchResults]);

    useEffect(() => {
        if (!searchText) {
            return;
        }
        setLocalStorageUserSearch({
            searchText,
            shortMoviesOnly,
            searchResults
        });
        emptySearchResults &&
            (shortMoviesOnly ? setUserMessage(SEARCH_SHORT_MOVIES_NOT_FOUND_MESSAGE) : setUserMessage(SEARCH_NOT_FOUND_MESSAGE));
    }, [searchText, shortMoviesOnly, emptySearchResults, searchResults]);

    return (
        <section className="movies" aria-label="Фильмы">
            <SearchForm onSearchClicked={onSearchClicked} savedSearch={userSearch} />
            {emptySearchResults
                ?
                isLoading ? <Preloader /> : <span className="movies-message">{userMessage}</span>
                :
                <MoviesCardList movies={searchResults.slice(0, pageSize)} />}
            {showMore && <button className="movies__more selectable-button" type="button" onClick={() => { setShowMoreClickedCounter(showMoreClickedCounter + 1) }}>Ещё</button>}
        </section>
    )
}