import './Promo.css';
import { HashLink } from 'react-router-hash-link';

export default function Promo() {

    return (
        <section className="promo">
            <div className="promo__project">
                <h1 className="promo__title">Учебный проект студента факультета <span className="nbr">Веб-разработки.</span> </h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <HashLink className="promo__button selectable-button" smooth to='/#aboutProject' >
                    Узнать больше
                </HashLink>
            </div>
            <div className="promo__image"></div>
        </section >
    )
}

<HashLink smooth to='/about-us/#section1' > History </HashLink>