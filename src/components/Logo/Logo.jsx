import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo({ position }) {
    return (
        <Link to="/">
            <img className={`logo selectable-button ${position}`} src={logo} alt="Логотип сайта" />
        </Link>

    )
}