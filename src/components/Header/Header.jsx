import './Header.css';
import Logo from '../Logo/Logo';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header({ isLoggedIn }) {
    const { pathname } = useLocation();
    const isMainPage = pathname === '/';
    const headerLineClass = isMainPage ? 'header__line header__line_path_main' : 'header__line';
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const handleNavbarClick = () => {
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <header className="header">
            <div className={headerLineClass}>
                <Logo position="header__logo-position" />
                {
                    isLoggedIn
                        ?
                        <>
                            <BurgerButton isMenuClicked={isMenuClicked} onClick={handleNavbarClick} />
                            <BurgerMenu isMenuClicked={isMenuClicked}>
                                <nav className="header__navbar header__navbar_buregermenu">
                                    <NavLink to="/"
                                        className={({ isActive }) => `header__navbar-link header__navbar-link_type_main selectable-link ${isActive ? 'header__navbar-link_type_active' : ''}`}>Главная</NavLink>
                                    <NavLink to="/movies"
                                        className={({ isActive }) => `header__navbar-link selectable-link ${isActive ? 'header__navbar-link_type_active' : ''}`}>Фильмы</NavLink>
                                    <NavLink to="/saved-movies"
                                        className={({ isActive }) => `header__navbar-link selectable-link ${isActive ? 'header__navbar-link_type_active' : ''}`}>Сохранённые фильмы</NavLink>
                                    <NavLink className="header__navbar-profile-button selectable-button" to="/profile">
                                        Аккаунт
                                    </NavLink>
                                </nav>
                            </BurgerMenu>
                        </>
                        :
                        (<nav className="header__navbar">
                            <NavLink to="/signup" className="header__navbar-register selectable-link">Регистрация</NavLink>
                            <NavLink to="/signin">
                                <button type='button' className="header__navbar-button selectable-button" aria-label="Кнопка Войти">
                                    Войти
                                </button>
                            </NavLink>
                        </nav>
                        )
                }

            </div >
        </header >
    )
}