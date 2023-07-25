import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants';

export default function Movies() {
    return (
        <section className="movies" aria-label="Фильмы">
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className="movies__more selectable-button" type="button">Ещё</button>
        </section>
    )
}