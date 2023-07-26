import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useScreenResize } from '../../hooks/useScreenResize';

export default function MoviesCardList({ movies }) {
    const { isMobile, isTablet } = useScreenResize();

    const moviesCount = isMobile ? 5 : isTablet ? 8 : 12;
    return (
        <ul className="moviescardlist">
            {movies.slice(0, moviesCount).map(movie => (
                <MoviesCard
                    key={movie.id}
                    movie={movie} />
            ))
            }
        </ul>
    )
}