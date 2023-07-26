import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({ signOut, onUpdateUser, profileMessage }) {
    const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

    const currentUser = useContext(CurrentUserContext);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isProfileChanged, setIsProfileChanged] = useState(false);
    const [isMessageShow, setIsMessageShow] = useState(false);


    useEffect(() => {
        const isProfileChanged = currentUser?.name !== values.name || currentUser?.email !== values.email;
        setIsProfileChanged(isProfileChanged);
        setIsMessageShow(!isProfileChanged);
    }, [values, currentUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsMessageShow(true);
        onUpdateUser({
            name: values.name,
            email: values.email,
        });
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
                            disabled={!isEditMode}
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
                            disabled={!isEditMode}
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
                            disabled={!isValid || !isProfileChanged}
                            type="submit"
                            className="profile__submit-button selectable-button"
                            aria-label="Кнопка Сохранить"
                        >
                            Сохранить
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