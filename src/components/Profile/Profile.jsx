import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({ changeUser }) {
    const { values, handleChange, errors, isValid } = useFormAndValidation();

    const currentUser = useContext(CurrentUserContext);

    const [isEditMode, setIsEditMode] = useState(false);
    const [isProfileChanged, setIsProfileChanged] = useState(false);


    useEffect(() => {
        setIsProfileChanged(currentUser?.name !== values.name || currentUser?.email !== values.email);
    }, [values, currentUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        changeUser(values);
    };

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
                            readOnly={!isEditMode}
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
                            readOnly={!isEditMode}
                        />
                    </div>
                    <span className="profile__field-error-message">
                        {errors.email}
                    </span>
                </div>
                <div className="profile__buttons">
                    {isEditMode
                        ?
                        (
                            <button
                                disabled={!isValid || !isProfileChanged}
                                type="submit"
                                className="profile__submit-button selectable-transparent"
                                aria-label="Кнопка Сохранить"
                            >
                                Сохранить
                            </button>
                        )
                        :
                        (
                            <>
                                <button
                                    type="button"
                                    className="profile__button selectable-transparent"
                                    aria-label="Кнопка редактирования"
                                    onClick={() => setIsEditMode(true)}
                                >
                                    Редактировать
                                </button>
                                <button
                                    type="button"
                                    className="profile__button profile__button_type_exit selectable-transparent"
                                    aria-label="Кнопка выхода из аккаунта"
                                >
                                    Выйти из аккаунта
                                </button>
                            </>
                        )
                    }
                </div>
            </form>
        </section>
    )
}