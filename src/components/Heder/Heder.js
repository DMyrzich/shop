import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Heder = () => {

    return (<nav className="blue darken-1">
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Мой Магазин</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">Обо мне</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </div>
    </nav>)
}

export default Heder;

