import './BurgerButton.css';

export default function BurgerButton({ onClick, isMenuClicked }) {
    const burgerClass = `burger__button-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`

    return (
        <nav className="burger__button-overlay" onClick={onClick}>
            <div className="burger__button-container">
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </nav>
    )
}

