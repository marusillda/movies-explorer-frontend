import './NavTab.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Promo() {

    return (
        <section className="navtab">
            <SectionTitle title="О проекте" />
            <ul className="navtab__table">
                <li className="navtab__table-cell">
                    <h3 className="navtab__table-heading">Дипломный проект включал 5 этапов</h3>
                    <p className="navtab__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="navtab__table-cell">
                    <h3 className="navtab__table-heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="navtab__table-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="navtab__timing">
                <h3 className="navtab__timing-line navtab__timing-line_period_backend">1 неделя</h3>
                <h3 className="navtab__timing-line navtab__timing-line_period_frontend">4 недели</h3>
                <p className="navtab__timing-name">Back-end</p>
                <p className="navtab__timing-name">Front-end</p>
            </div>
        </section >
    )
}