import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const { pathname } = useLocation();
    const showRegistration = pathname === '/sign-in';
    const showLogin = pathname === '/sign-up';

    return (
        <header className="header">
            {/* <div>
          {showNavbar && (
            <NavbarMenu isMenuClicked={isMenuClicked}>
              <div className="header__navbar-user">{currentUser?.email}</div>
              <Link to="/sign-in" className="header__navbar-link header__navbar-link_exit selectable-white" onClick={signOut}>Выйти</Link>
            </NavbarMenu>)}
          </div> 
            <div className="header__line">
                <img className="header__logo" src={headerLogo} alt="Логотип сайта" />
                <div className="header__navbar selectable-white">
                    {showRegistration && (<Link to="/sign-up" className="header__navbar-link selectable-white">Регистрация</Link>)}
                    {showLogin && (<Link to="/sign-in" className="header__navbar-link selectable-white">Войти</Link>)}
                    {showNavbar && (
                        <Navbar isMenuClicked={isMenuClicked} onClick={handleNavbarClick} />
                    )}
                </div>
            </div>*/}
            <div className="header__line">
                <img className="header__logo" src={headerLogo} alt="Логотип сайта" />
                <nav className="header__navbar">
                    <Link to="/sign-up" className="header__navbar-link">Регистрация</Link>
                    <Link to="/sign-in">
                        <button type='button' className="header__navbar-button" aria-label="Кнопка Войти">
                            Войти
                        </button>
                    </Link>
                </nav>
            </div >

        </header >
    )
}