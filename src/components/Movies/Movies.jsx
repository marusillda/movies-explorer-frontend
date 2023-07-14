import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants';

export default function Movies() {
    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList movies={movies} />
            <button className="movies__more selectable-button" type="button">Ещё</button>
        </main>
    )
}