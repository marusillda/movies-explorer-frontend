import './Login.css';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';

export default function Login({ loginUser }) {
    const { values, handleChange, errors, isValid } = useFormAndValidation()

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(values);
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
                        value={values.password || ''}
                        onChange={handleChange}
                        autoComplete="current-password"
                        placeholder="Введите пароль"
                        required
                    />
                    <span className="login__field-error-message">
                        {errors.password}
                    </span>
                </div>
                <button
                    disabled={!isValid}
                    type="submit"
                    className="login__submit-button selectable-transparent"
                    aria-label="Кнопка Войти"
                >
                    Войти
                </button>
            </form>
            <div className="login__signin">
                <p className="login__signin-link">Ещё не зарегистрированы? </p>
                <Link to="/signup" className="login__signin-link login__signin-link_color_blue selectable-transparent">Регистрация</Link>
            </div>
        </section>
    )
}
