import React, { useContext } from 'react';
import { MyContex } from '../../Api/Api';
import './Item.css';

const Item = ({ id, name, image, price, description }) => {

    const { addCard } = useContext(MyContex);

    return (<div className="col s12 m7">
        <div className="card">
            <div className="card-image">
                <img alt={name} src={image}></img>
            </div>
            <div style={{ height: 150 }} className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button onClick={() => addCard({ id, name, price, description, image })} className="btn blue darken-1">Купить</button>
                <span className="right">Цена: {price} руб.</span>
            </div>
        </div>
    </div>)
}

export default Item;

