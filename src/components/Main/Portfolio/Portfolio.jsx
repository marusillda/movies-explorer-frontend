import './Portfolio.css';
import portfolioLink from '../../../images/portfolio-link.svg';

export default function Portfolio() {

    return (
        <section className="portfolio" aria-label="Портфолио">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__table" >
                <ul className="portfolio__projects">
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Статичный сайт</p>
                        <a className="portfolio__project-link selectable-link" target="_blank" rel="noopener noreferrer" href="https://marusillda.github.io/how-to-learn/">
                            <img className="portfolio__project-link-image" src={portfolioLink} alt="Стрелка для перехода на сайт" />
                        </a>
                    </li>
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Адаптивный сайт</p>
                        <a className="portfolio__link selectable-link" target="_blank" rel="noopener noreferrer" href="https://marusillda.github.io/russian-travel/">
                            <img className="portfolio__project-link-image" src={portfolioLink} alt="Стрелка для перехода на сайт" />
                        </a>
                    </li>
                    <li className="portfolio__project">
                        <p className="portfolio__project-name">Одностраничное приложение</p>
                        <a className="portfolio__link selectable-link" target="_blank" rel="noopener noreferrer" href="https://mesto.marusillda.nomoreparties.sbs/">
                            <img className="portfolio__project-link-image" src={portfolioLink} alt="Стрелка для перехода на сайт" />
                        </a>
                    </li>
                </ul>
            </div>
        </section >
    )
}