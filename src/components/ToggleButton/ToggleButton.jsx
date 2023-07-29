import './ToggleButton.css';

export default function ToggleButton({ text, name, value, onChange }) {
    return (
        <div className="togglebutton">
            <input className="togglebutton__input" type="checkbox" id="switch" name={name} checked={value} onChange={onChange} />
            <label className="togglebutton__label  selectable-button" htmlFor="switch" />
            <p className="togglebutton__text">{text}</p>
        </div>
    )
}