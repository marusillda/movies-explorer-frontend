import './Header.css';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
    const { pathname } = useLocation();
    const isMainPage = pathname === '/';
    const headerLineClass = isMainPage ? 'header__line header__line_path_main' : 'header__line';
    const currentUser = useContext(CurrentUserContext);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleNavbarClick = () => {
        setIsMenuClicked(!isMenuClicked);
    }


    return (
        <header className="header">
            <div className={headerLineClass}>
                <Logo position="header__logo-position" />
                <BurgerButton isMenuClicked={isMenuClicked} onClick={handleNavbarClick} />
                {
                    !currentUser
                        ?
                        <BurgerMenu isMenuClicked={isMenuClicked}>
                            <nav className="header__navbar header__navbar_buregermenu">
                                <Link to="/" className="header__navbar-link header__navbar-link_type_main selectable-link">Главная</Link>
                                <Link to="/movies" className="header__navbar-link header__navbar-link_type_movies selectable-link">Фильмы</Link>
                                <Link to="/saved-movies" className="header__navbar-link header__navbar-link_type_savedmovies selectable-link">Сохранённые фильмы</Link>
                                <Link to="/profile">
                                    <button type='button' className="header__navbar-profile-button selectable-button" aria-label="Кнопка для редатирования данных пользователя">
                                        Аккаунт
                                    </button>
                                </Link>
                            </nav>
                        </BurgerMenu>

                        :
                        (<nav className="header__navbar">
                            <Link to="/signup" className="header__navbar-link header__navbar-link_type_register selectable-link">Регистрация</Link>
                            <Link to="/signin">
                                <button type='button' className="header__navbar-button selectable-button" aria-label="Кнопка Войти">
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