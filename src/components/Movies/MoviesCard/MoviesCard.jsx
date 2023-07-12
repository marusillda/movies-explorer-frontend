import './MoviesCard.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import photo from '../../../images/pic__COLOR_pic.png'

export default function MoviesCard({ movie, onMovieClick, onMovieLike }) {
    const currentUser = useContext(CurrentUserContext);
    const isLiked = true;
    const moviesLikeButtonClassName = (
        `moviescard__like-button ${isLiked && 'moviescard__like-button-fill'}`
    );

    return (
        <>
            <article className="moviescard">
                <img className="moviescard__photo" src={photo} alt="Название фильма" />
                {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
                <div className="moviescard__capture">
                    <div className="moviescard__info">
                        <h2 className="moviescard__info-name">33 слова о дизайне</h2>
                        <p className="moviescard__info-duration">1ч 47м</p>
                    </div>
                    <button
                        type="button"
                        className={moviesLikeButtonClassName}
                        aria-label="Кнопка Поставить лайк"
                    >
                    </button>
                </div>
            </article>
            <article className="moviescard">
                <img className="moviescard__photo" src={photo} alt="Название фильма" />
                {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
                <div className="moviescard__capture">
                    <div className="moviescard__info">
                        <h2 className="moviescard__info-name">33 слова о дизайне</h2>
                        <p className="moviescard__info-duration">1ч 47м</p>
                    </div>
                    <button
                        type="button"
                        className={moviesLikeButtonClassName}
                        aria-label="Кнопка Поставить лайк"
                    >
                    </button>
                </div>
            </article>
            <article className="moviescard">
                <img className="moviescard__photo" src={photo} alt="Название фильма" />
                {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
                <div className="moviescard__capture">
                    <div className="moviescard__info">
                        <h2 className="moviescard__info-name">33 слова о дизайне</h2>
                        <p className="moviescard__info-duration">1ч 47м</p>
                    </div>
                    <button
                        type="button"
                        className={moviesLikeButtonClassName}
                        aria-label="Кнопка Поставить лайк"
                    >
                    </button>
                </div>
            </article>
            <article className="moviescard">
                <img className="moviescard__photo" src={photo} alt="Название фильма" />
                {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
                <div className="moviescard__capture">
                    <div className="moviescard__info">
                        <h2 className="moviescard__info-name">33 слова о дизайне</h2>
                        <p className="moviescard__info-duration">1ч 47м</p>
                    </div>
                    <button
                        type="button"
                        className={moviesLikeButtonClassName}
                        aria-label="Кнопка Поставить лайк"
                    >
                    </button>
                </div>
            </article>
            <article className="moviescard">
                <img className="moviescard__photo" src={photo} alt="Название фильма" />
                {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
                <div className="moviescard__capture">
                    <div className="moviescard__info">
                        <h2 className="moviescard__info-name">33 слова о дизайне</h2>
                        <p className="moviescard__info-duration">1ч 47м</p>
                    </div>
                    <button
                        type="button"
                        className={moviesLikeButtonClassName}
                        aria-label="Кнопка Поставить лайк"
                    >
                    </button>
                </div>
            </article>
            <article className="moviescard">
                <img className="moviescard__photo" src={photo} alt="Название фильма" />
                {/* <img className="moviescard__photo" src={movie.link} alt={movie.name} onClick={() => onMovieClick(movie)} /> */}
                <div className="moviescard__capture">
                    <div className="moviescard__info">
                        <h2 className="moviescard__info-name">33 слова о дизайне</h2>
                        <p className="moviescard__info-duration">1ч 47м</p>
                    </div>
                    <button
                        type="button"
                        className={moviesLikeButtonClassName}
                        aria-label="Кнопка Поставить лайк"
                    >
                    </button>
                </div>
            </article>
        </>

    )
}