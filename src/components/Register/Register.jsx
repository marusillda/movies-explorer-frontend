import './Register.css';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';

export default function Register({ registerUser }) {
    const { values, handleChange, errors, isValid } = useFormAndValidation()

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(values);
    };

    return (
        <section className="register" aria-label="Регистрация на сайте">
            <Logo position="register__logo-position" />
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__field-container">
                    <label className="register__label" htmlFor="name">Имя</label>
                    <input
                        className={`register__field ${errors.name ? "register__field-error" : ""}`}
                        type="text"
                        id="name"
                        name="name"
                        value={values.name || ''}
                        onChange={handleChange}
                        autoComplete="name"
                        minLength="2"
                        maxLength="30"
                        placeholder="Введите имя"
                        required
                    />
                    <span className="register__field-error-message">
                        {errors.name}
                    </span>
                </div>
                <div className="register__field-container">
                    <label className="register__label" htmlFor="email">E-mail</label>
                    <input
                        className={`register__field ${errors.email ? "register__field-error" : ""}`}
                        type="email"
                        id="email"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        autoComplete="username"
                        placeholder="Введите E-mail"
                        required
                    />
                    <span className="register__field-error-message">
                        {errors.email}
                    </span>
                </div>
                <div className="register__field-container">
                    <label className="register__label" htmlFor="password">Пароль</label>
                    <input
                        className={`register__field ${errors.password ? "register__field-error" : ""}`}
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
                    />
                    <span className="register__field-error-message">
                        {errors.password}
                    </span>
                </div>
                <button
                    disabled={!isValid}
                    type="submit"
                    className="register__submit-button selectable-button"
                    aria-label="Кнопка Зарегистрироваться"
                >
                    Зарегистрироваться
                </button>
            </form>
            <div className="register__signin">
                <p className="register__signin-link">Уже зарегистрированы? </p>
                <Link to="/signin" className="register__signin-link register__signin-link_color_blue selectable-link">Войти</Link>
            </div>
        </section>
    )
}
