import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutProject() {
    return (
        <section id='aboutProject' className="aboutproject" aria-label="О проекте">
            <SectionTitle title="О проекте" />
            <ul className="aboutproject__table">
                <li className="aboutproject__table-cell">
                    <h3 className="aboutproject__table-heading">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutproject__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="aboutproject__table-cell">
                    <h3 className="aboutproject__table-heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutproject__table-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="aboutproject__timing">
                <h3 className="aboutproject__timing-line aboutproject__timing-line_period_backend">1 неделя</h3>
                <h3 className="aboutproject__timing-line aboutproject__timing-line_period_frontend">4 недели</h3>
                <p className="aboutproject__timing-name">Back-end</p>
                <p className="aboutproject__timing-name">Front-end</p>
            </div>
        </section >
    )
}