import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


export default function MoviesCardList({ movies }) {
    return (
        <>
            <ul className="moviescardlist">
                {
                    movies.map(movie => (
                        <MoviesCard
                            key={movie.id}
                            movie={movie} />
                    ))
                }
            </ul>
        </>
    )
}