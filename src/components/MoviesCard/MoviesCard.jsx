import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({ movie, onMovieClick }) {
    const [isLiked, setIsLiked] = useState(false);
    const location = useLocation();
    const { REACT_APP_BASE_MOVIES_URL } = process.env;

    const onMovieLike = () => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }

    const moviesLikeButtonClassName = (
        `moviescard__like-button ${isLiked && 'moviescard__like-button-fill'}`
    );

    const calcDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч ${minutes}м`;
    }

    return (
        <li className="moviescard">
            <a href="https://www.youtube.com/watch?v=iudeJyaOxss" className='selectable-link' target="_blank" rel="noreferrer">
                <img className="moviescard__photo" src={`${REACT_APP_BASE_MOVIES_URL}${movie.image.url}`} alt={`Фильм ${movie.nameRU}`} />
            </a>
            <div className="moviescard__info">
                <h2 className="moviescard__info-name">{movie.nameRU}</h2>
                {(location.pathname === '/movies') && <button
                    type="button"
                    className={moviesLikeButtonClassName}
                    aria-label="Кнопка Поставить лайк"
                    onClick={() => { onMovieLike() }}
                >
                </button>}
                {(location.pathname === '/saved-movies') &&
                    <div
                        className="moviescard-overlay"
                        onClick={() => { onMovieLike() }}
                    >
                    </div>}
            </div>
            <p className="moviescard__info-duration">{calcDuration(movie.duration)}</p>
        </li>
    )
}