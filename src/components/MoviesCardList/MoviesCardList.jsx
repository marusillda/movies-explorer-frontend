import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


export default function MoviesCardList({ movies, showAddToSavedButton }) {
    return (
        <ul className="moviescardlist">
            {
                movies.map(movie => (
                    <MoviesCard
                        key={movie.movieId || movie.id}
                        movie={movie}
                        showAddToSavedButton={showAddToSavedButton}
                    />
                ))
            }
        </ul>
    )
}