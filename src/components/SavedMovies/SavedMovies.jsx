import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { savedMovies } from '../../utils/constants';

export default function SavedMovies() {
    return (
        <main className="savedmovies">
            <SearchForm />
            <MoviesCardList movies={savedMovies} />
        </main>
    )
}