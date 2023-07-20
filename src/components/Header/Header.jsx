import './Header.css';
import Logo from '../Logo/Logo';
import { NavLink, useLocation } from 'react-router-dom';
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
                {
                    currentUser
                        ?
                        <>
                            <BurgerButton isMenuClicked={isMenuClicked} onClick={handleNavbarClick} />
                            <BurgerMenu isMenuClicked={isMenuClicked}>
                                <nav className="header__navbar header__navbar_buregermenu">
                                    <NavLink to="/"
                                        className={({ isActive }) => `header__navbar-link header__navbar-link_type_main selectable-link ${isActive ? 'header__navbar-link_type_active' : ''}`}>Главная</NavLink>
                                    <NavLink to="/movies"
                                        className={({ isActive }) => `header__navbar-link header__navbar-link_type_movies selectable-link ${isActive ? 'header__navbar-link_type_active' : ''}`}>Фильмы</NavLink>
                                    <NavLink to="/saved-movies"
                                        className={({ isActive }) => `header__navbar-link header__navbar-link_type_savedmovies selectable-link ${isActive ? 'header__navbar-link_type_active' : ''}`}>Сохранённые фильмы</NavLink>
                                    <NavLink to="/profile">
                                        <button type='button' className="header__navbar-profile-button selectable-button" aria-label="Кнопка для редатирования данных пользователя">
                                            Аккаунт
                                        </button>
                                    </NavLink>
                                </nav>
                            </BurgerMenu>
                        </>
                        :
                        (<nav className="header__navbar">
                            <NavLink to="/signup" className="header__navbar-link header__navbar-link_type_register selectable-link">Регистрация</NavLink>
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