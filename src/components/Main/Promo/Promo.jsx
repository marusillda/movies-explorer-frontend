import './Promo.css';

export default function Promo() {

    return (
        <section className="promo">
            <div className="promo__project">
                <h1 className="promo__title">Учебный проект студента факультета <span className="nbr">Веб-разработки.</span> </h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button
                    type="button"
                    className="promo__button selectable-button"
                    aria-label="Кнопка Узнать больше"
                >
                    Узнать больше
                </button>
            </div>
            <div className="promo__image"></div>
        </section >
    )
}
