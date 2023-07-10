import './Logo.css';
import logo from '../../images/logo.svg';

export default function Logo({ position }) {
    return (
        <img className={`logo ${position}`} src={logo} alt="Логотип сайта" />
    )
}