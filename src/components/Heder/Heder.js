import React from 'react'
import { Link } from 'react-router-dom';

const Heder = () => {

    return (<nav className="blue darken-1">
        <div className="nav-wrapper">
            <Link to="/shop/" className="brand-logo">Магазин</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/shop/">Товары</Link></li>
                <li><Link to="/shop/">Акции</Link></li>
                <li><Link to="/shop/">Контакты</Link></li>
            </ul>
        </div>
    </nav>)
}

export default Heder;

