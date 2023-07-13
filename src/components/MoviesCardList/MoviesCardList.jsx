import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies }) {
    return (
        <section className="moviescardlist">
            {movies.map(movie => (
                <MoviesCard
                    key={movie._id}
                    movie={movie} />
            ))
            }
        </section>
    )
}