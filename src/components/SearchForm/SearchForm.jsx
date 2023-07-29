import './SearchForm.css';
import { useEffect, useState } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import ToggleButton from '../ToggleButton/ToggleButton';
import {
    SEARCH_VALIDATION_ERROR_MESSAGE
} from '../../utils/constants';

export default function SearchForm({ onSearchClicked, savedSearch }) {
    const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();
    const [lastSearch, setLastSearch] = useState({});
    const searchMovies = (values) => onSearchClicked(values.searchText, values.shortMoviesOnly);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovies(values);
        setLastSearch(values);
    }

    useEffect(() => {
        setValues(savedSearch);
        setIsValid(savedSearch.searchText !== '');
        setLastSearch(savedSearch);
        // eslint-disable-next-line
    }, [savedSearch])


    useEffect(() => {
        const { searchText } = lastSearch;
        const { shortMoviesOnly } = values;
        if (searchText) {
            searchMovies({ searchText, shortMoviesOnly });
        }
        // eslint-disable-next-line
    }, [values.shortMoviesOnly]);

    return (
        <form className="searchform" onSubmit={handleSubmit}>
            <div className="searchform__container">
                <input
                    className="searchform__field-movie"
                    type="text"
                    id="searchText"
                    name="searchText"
                    placeholder="Фильм"
                    required
                    minLength='1'
                    value={values.searchText}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="searchform__submit-button selectable-button"
                    aria-label="Кнопка поиска фильма"
                    disabled={!isValid}
                >
                    Поиск
                </button>
            </div>
            <ToggleButton
                name="shortMoviesOnly"
                text="Короткометражки"
                value={values.shortMoviesOnly}
                onChange={handleChange} />
            {errors.searchText && <span className="searchform__error">
                {SEARCH_VALIDATION_ERROR_MESSAGE}
            </span>}
        </form>
    )
}