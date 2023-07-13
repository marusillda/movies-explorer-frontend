import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
    return (
        <main>
            <SearchForm />
            <MoviesCardList />
        </main>
    )
}