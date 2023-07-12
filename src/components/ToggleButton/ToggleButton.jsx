import './ToggleButton.css';

export default function ToggleButton({ text }) {
    return (
        <div className="togglebutton">
            <input className="togglebutton__input" type="checkbox" id="switch" />
            <label className="togglebutton__label" htmlFor="switch" />
            <p className="togglebutton__text">{text}</p>
        </div>
    )
}