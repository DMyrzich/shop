import React from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = ({ items }) => {

    return (<div className="shop-items">
        {
            items.map((el, idx) => <Item key={idx} {...el} />)
        }
    </div>)
}

export default Items;

