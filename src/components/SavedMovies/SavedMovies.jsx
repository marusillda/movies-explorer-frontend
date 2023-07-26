import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
    return (
        <section className="savedmovies" aria-label="Сохраненные фильмы">
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}