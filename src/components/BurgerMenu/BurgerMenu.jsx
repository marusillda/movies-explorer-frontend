import './BurgerMenu.css';

export default function BurgerMenu({ children, isMenuClicked }) {

    const menuClass = `burger-menu ${isMenuClicked ? 'burger-menu_visible' : 'burger-menu_hidden'}`
    const menuOverlay = `burger-overlay ${isMenuClicked ? '' : 'burger-overlay_hidden'}`

    return (
        <>
            <div className={menuOverlay}></div>
            <div className={menuClass}>
                {children}
            </div>
        </>
    )
}