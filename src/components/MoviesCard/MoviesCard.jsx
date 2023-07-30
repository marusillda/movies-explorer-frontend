import { useState, useContext } from 'react';
import './MoviesCard.css';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

export default function MoviesCard({ movie, showAddToSavedButton }) {
    const { addToSavedMovies, deleteFromSavedMovies } = useContext(SavedMoviesContext);
    const [errorMessage, setErrorMessage] = useState('');

    const onMovieClick = () => {
        const promise = movie._id ? deleteFromSavedMovies(movie._id) : addToSavedMovies(movie);
        promise.catch(error => {
            setErrorMessage(error.message);
            setTimeout(() => setErrorMessage(''), 3000);
        });
    }

    const moviesLikeButtonClassName = `moviescard__like-button ${movie._id && 'moviescard__like-button-fill'}`;

    const calcDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч ${minutes}м`;
    }

    return (
        <li className="moviescard">
            {
                errorMessage
                    ? <div className=''>{errorMessage}</div>
                    :
                    <a href="https://www.youtube.com/watch?v=iudeJyaOxss" className='selectable-link' target="_blank" rel="noreferrer">
                        <img className="moviescard__photo" src={movie.image} alt={`Фильм ${movie.nameRU}`} />
                    </a>
            }
            <div className="moviescard__info">
                <h2 className="moviescard__info-name">{movie.nameRU}</h2>
                {
                    showAddToSavedButton
                        ? <button
                            type="button"
                            className={moviesLikeButtonClassName}
                            aria-label="Кнопка Поставить лайк"
                            onClick={onMovieClick}
                        >
                        </button>
                        :
                        <button
                            type="button"
                            className="moviescard__delete-button"
                            aria-label="Кнопка удалить фильм из сохраненных"
                            onClick={onMovieClick}
                        >
                        </button>
                }
            </div>
            <p className="moviescard__info-duration">{calcDuration(movie.duration)}</p>
        </li>
    )
}