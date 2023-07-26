import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({ movies }) {
    return (
        <section className="movies" aria-label="Фильмы">
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className="movies__more selectable-button" type="button">Ещё</button>
        </section>
    )
}