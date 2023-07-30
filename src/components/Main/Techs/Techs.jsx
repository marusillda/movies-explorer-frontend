import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Techs() {
    return (
        <section className="techs" aria-label="Технологии">
            <SectionTitle title="Технологии" />
            <h3 className="techs__heading">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__technologies">
                <li className="techs__technology">HTML</li>
                <li className="techs__technology">CSS</li>
                <li className="techs__technology">JS</li>
                <li className="techs__technology">React</li>
                <li className="techs__technology">Git</li>
                <li className="techs__technology">Express.js</li>
                <li className="techs__technology">mongoDB</li>
            </ul>
        </section >
    )
}
