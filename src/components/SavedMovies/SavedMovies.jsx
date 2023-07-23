import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { savedMovies } from '../../utils/constants';

export default function SavedMovies() {
    return (
        <section className="savedmovies" aria-label="Сохраненные фильмы">
            <SearchForm />
            <MoviesCardList movies={savedMovies} />
        </section>
    )
}