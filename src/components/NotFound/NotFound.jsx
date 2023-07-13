import './NotFound.css';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    const back = () => navigate(-1);

    return (
        <main className="notfound">
            <h1 className="notfound__heading">404</h1>
            <p className="notfound__description">Страница не найдена</p>
            <button type="button" onClick={back} className="notfound__back-button selectable-link">Назад</button>
        </main>
    )
}