import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';
import {
    HTTP_UNAUTHORIZED,
    USER_ERROR_LOGIN_MESSAGE
} from '../../utils/constants';

export default function Login({ loginUser }) {
    const { values, handleChange, errors, isValid } = useFormAndValidation();
    const [loginMessage, setLoginMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        loginUser(values)
            .catch((error) => {
                error.code === HTTP_UNAUTHORIZED
                    ? setLoginMessage(USER_ERROR_LOGIN_MESSAGE)
                    : setLoginMessage(error.message);
            })
            .finally(() => { setIsLoading(false) });
    };

    return (
        <section className="login" aria-label="Вход на сайт">
            <Logo position="login__logo-position" />
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__field-container">
                    <label className="login__label" htmlFor="email">E-mail</label>
                    <input
                        className={`login__field ${errors.email ? "login__field-error" : ""}`}
                        type="email"
                        id="email"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                        placeholder="Введите E-mail"
                        disabled={isLoading}
                    />
                    <span className="login__field-error-message">
                        {errors.email}
                    </span>
                </div>
                <div className="login__field-container">
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input
                        className={`login__field ${errors.password ? "login__field-error" : ""}`}
                        type="password"
                        id="password"
                        name="password"
                        minLength="6"
                        maxLength="22"
                        value={values.password || ''}
                        onChange={handleChange}
                        autoComplete="current-password"
                        placeholder="Введите пароль"
                        required
                        disabled={isLoading}
                    />
                    <span className="login__field-error-message">
                        {errors.password}
                    </span>
                </div>
                <div className="login__buttons">
                    <span className="login__error-message">
                        {loginMessage}
                    </span>
                    <button
                        disabled={!isValid || isLoading}
                        type="submit"
                        className="login__submit-button selectable-button"
                        aria-label="Кнопка Войти"
                    >
                        {isLoading ? 'Вход...' : 'Войти'}
                    </button>
                </div>
            </form>
            <div className="login__signin">
                <p className="login__signin-link">Ещё не зарегистрированы? </p>
                <Link to="/signup" className="login__signin-link login__signin-link_color_blue selectable-link">Регистрация</Link>
            </div>
        </section>
    )
}
