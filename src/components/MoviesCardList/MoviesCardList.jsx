import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useScreenResize } from '../../hooks/useScreenResize';

export default function MoviesCardList({ movies }) {
    const { isMobile, isTablet } = useScreenResize();

    const moviesCount = isMobile ? 5 : isTablet ? 8 : 12;
    return (
        <section className="moviescardlist">
            {movies.slice(0, moviesCount).map(movie => (
                <MoviesCard
                    key={movie._id}
                    movie={movie} />
            ))
            }
        </section>
    )
}