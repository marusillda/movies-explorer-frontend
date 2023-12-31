import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutmeAvatar from '../../../images/aboutme-avatar.png';

export default function AboutMe() {
    return (
        <section className="aboutme" aria-label="Обо мне">
            <SectionTitle title="Студент" />
            <article className="aboutme__author">
                <div className="aboutme__author-info">
                    <h2 className="aboutme__author-name">Мария</h2>
                    <p className="aboutme__author-about">Фронтенд-разработчик, 34 года</p>
                    <p className="aboutme__author-description">Закончила Факультет экономики и финансов ОмГАУ по специальности «Финансы и кредит». Работала бухгалтером по МСФО.
                        Более 12 лет занимаюсь фотографией. Люблю изучать все новое и путешествовать с семьей. Во время проживания в Нью-Йорке решила сменить профессию. Прошла курс переподготовки по специальности «Web-разработчик» и готовлюсь к переезду в Москву.
                    </p>
                    <a className="aboutme__github-link selectable-link" target="_blank" rel="noopener noreferrer" href="https://github.com/marusillda">Github</a>
                </div>
                <img className="aboutme__avatar" src={aboutmeAvatar} alt="Фотография автора" />
            </article>
        </section >
    )
}