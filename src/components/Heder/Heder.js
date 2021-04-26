import React from 'react'
import { Link } from 'react-router-dom';

const Heder = () => {

    return (<nav className="blue darken-1">
        <div className="nav-wrapper">
            <Link to="/movie/" className="brand-logo">Киномания</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/movie/">Сериалы</Link></li>
                <li><Link to="/movie/">Фильмы</Link></li>
                <li><Link to="/about/">Контакты</Link></li>
            </ul>
        </div>
    </nav>)
}

export default Heder;

