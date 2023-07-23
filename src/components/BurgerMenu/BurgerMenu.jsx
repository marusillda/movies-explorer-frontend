import './BurgerMenu.css';

export default function BurgerMenu({ children, isMenuClicked }) {

    const menuClass = `burger__menu ${isMenuClicked ? 'burger__menu_visible' : 'burger__menu_hidden'}`
    const menuOverlay = `burger__menu-overlay ${isMenuClicked ? '' : 'burger__menu-overlay-hidden'}`

    return (
        <aside>
            <div className={menuOverlay}></div>
            <div className={menuClass}>
                {children}
            </div>
        </aside>
    )
}