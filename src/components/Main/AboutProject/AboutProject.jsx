import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutProject() {

    return (
        <section className="aboutproject">
            <SectionTitle title="Технологии" />
            <h3 className="aboutproject-heading">7 технологий</h3>
            <p className="aboutproject-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </section >
    )
}
