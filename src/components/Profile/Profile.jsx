import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
    HTTP_CONFLICT,
    PROFILE_SUCCESS_UPDATE_MESSAGE,
    USER_EMAIL_EXISTS_MESSAGE,
    PROFILE_UPDATE_ERROR_MESSAGE
} from '../../utils/constants';

export default function Profile({ signOut, onUpdateUser }) {
    const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

    const currentUser = useContext(CurrentUserContext);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isProfileChanged, setIsProfileChanged] = useState(false);
    const [isMessageShow, setIsMessageShow] = useState(false);
    const [profileMessage, setProfileMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const isProfileChanged = currentUser?.name !== values.name || currentUser?.email !== values.email;
        setIsProfileChanged(isProfileChanged);
        setIsMessageShow(!isProfileChanged);
    }, [values, currentUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsMessageShow(true);
        onUpdateUser({
            name: values.name,
            email: values.email,
        })
            .then(() => { setProfileMessage(PROFILE_SUCCESS_UPDATE_MESSAGE); })
            .catch(error => {
                error.code === HTTP_CONFLICT
                    ? setProfileMessage(USER_EMAIL_EXISTS_MESSAGE)
                    : setProfileMessage(PROFILE_UPDATE_ERROR_MESSAGE);
            })
            .finally(() => { setIsLoading(false) });
    };

    useEffect(() => {
        setValues({
            name: currentUser.name || '',
            email: currentUser.email || '',
        })
        // eslint-disable-next-line
    }, [currentUser]);


    return (
        <section className="profile" aria-label="Редактирование профиля пользователя">
            <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form-container">
                    <div className="profile__field-container">
                        <label className="profile__label">Имя</label>
                        <input
                            className={`profile__field ${errors.name ? "profile__field-error" : ""}`}
                            type="text"
                            id="name"
                            name="name"
                            value={values.name || ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                            required
                            placeholder="Введите имя"
                            disabled={!isEditMode || isLoading}
                        />
                    </div>
                    <span className="profile__field-error-message">
                        {errors.name}
                    </span>
                </div>
                <div className="profile__form-container">
                    <div className="profile__field-container">
                        <label className="profile__label">E-mail</label>
                        <input
                            className={`profile__field ${errors.name ? "profile__field-error" : ""}`}
                            type="email"
                            id="email"
                            name="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            required
                            placeholder="Введите email"
                            disabled={!isEditMode || isLoading}
                        />
                    </div>
                    <span className="profile__field-error-message">
                        {errors.email}
                    </span>
                </div>
                {isEditMode
                    ?
                    (<div className="profile__buttons">
                        <span className='profile__error-message'>
                            {isMessageShow && profileMessage}
                        </span>
                        <button
                            disabled={!isValid || !isProfileChanged || isLoading}
                            type="submit"
                            className="profile__submit-button selectable-button"
                            aria-label="Кнопка Сохранить"
                        >
                            {isLoading ? 'Сохранение...' : 'Сохранить'}
                        </button>
                    </div>
                    )
                    :
                    (
                        <div className="profile__buttons">
                            <button
                                type="button"
                                className="profile__button selectable-link"
                                aria-label="Кнопка редактирования"
                                onClick={() => setIsEditMode(true)}
                            >
                                Редактировать
                            </button>
                            <Link className="profile__button profile__button_type_exit selectable-link" to="/" onClick={signOut}>
                                Выйти из аккаунта
                            </Link>
                        </div>
                    )
                }
            </form>
        </section>
    )
}