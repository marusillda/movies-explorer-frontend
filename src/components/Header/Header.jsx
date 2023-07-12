import './Header.css';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function Header() {
    const { pathname } = useLocation();
    const isLoginPage = pathname === '/signin';
    const isRegistrationPage = pathname === '/signup';
    const showHeader = !isLoginPage && !isRegistrationPage;
    const isMainPage = pathname === '/';
    const headerLineClass = isMainPage ? 'header__line header__line_path_main' : 'header__line';
    const currentUser = useContext(CurrentUserContext);

    return showHeader && (
        <header className="header">
            <div className={headerLineClass}>
                <Logo position="header__logo-position" />
                {currentUser
                    ?
                    (<nav className="header__navbar">
                        <Link to="/movies" className="header__navbar-link-movies">Фильмы</Link>
                        <Link to="/saved-movies" className="header__navbar-link-savedmovies">Сохранённые фильмы</Link>
                        <Link to="/profile">
                            <button type='button' className="header__navbar-profile-button" aria-label="Кнопка для редатирования данных пользователя">
                                Аккаунт
                            </button>
                        </Link>
                    </nav>
                    )
                    :
                    (<nav className="header__navbar">
                        <Link to="/signup" className="header__navbar-link">Регистрация</Link>
                        <Link to="/signin">
                            <button type='button' className="header__navbar-button" aria-label="Кнопка Войти">
                                Войти
                            </button>
                        </Link>
                    </nav>
                    )
                }
            </div >

        </header >
    )
}