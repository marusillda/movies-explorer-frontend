import './SearchForm.css';
import ToggleButton from '../ToggleButton/ToggleButton';

export default function SearchForm() {
    return (
        <form className="searchform">
            <div className="searchform__container">
                <input
                    className="searchform__field-movie"
                    type="text"
                    id="movie"
                    name="movie"
                    placeholder="Фильм"
                    required
                    autoComplete='off'
                />
                <button
                    type="submit"
                    className="searchform__submit-button selectable-button"
                    aria-label="Кнопка поиска фильма"
                >
                    Поиск
                </button>
            </div>
            <ToggleButton text="Короткометражки" />
        </form>
    )
}