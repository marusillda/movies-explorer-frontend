import { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie, onMovieClick }) {
    const [isLiked, setIsLiked] = useState(false);

    const onMovieLike = () => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }

    const moviesLikeButtonClassName = (
        `moviescard__like-button ${isLiked && 'moviescard__like-button-fill'}`
    );

    return (
        <article className="moviescard">
            <img className="moviescard__photo" src={movie.photo} alt="Название фильма" />
            {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
            <div className="moviescard__capture">
                <div className="moviescard__info">
                    <h2 className="moviescard__info-name">{movie.name}</h2>
                    <p className="moviescard__info-duration">{movie.duration}</p>
                </div>
                <button
                    type="button"
                    className={moviesLikeButtonClassName}
                    aria-label="Кнопка Поставить лайк"
                    onClick={() => { onMovieLike() }}
                >
                </button>
            </div>
        </article>
    )
}