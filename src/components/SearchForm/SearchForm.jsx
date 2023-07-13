import './SearchForm.css';
import ToggleButton from '../ToggleButton/ToggleButton';

export default function SearchForm() {
    return (
        <section className="searchform" aria-label="Форма поиска">
            <form className="searchform__container">
                <div className="searchform__field">
                    <input
                        className="searchform__field-movie"
                        type="text"
                        id="movie"
                        name="movie"
                        placeholder="Фильм"
                    />
                    <button
                        type="submit"
                        className="searchform__submit-button selectable-transparent"
                        aria-label="Кнопка поиска фильма"
                    >
                        Поиск
                    </button>
                </div>
            </form>
            <ToggleButton text="Короткометражки" />
        </section>
    )
}