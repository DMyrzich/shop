import React, { useContext } from 'react'
import { MyContex } from '../../Api/Api';

import './Cart.css';

const Cart = ({ cardItem }) => {

    const { SetshowCard, showCard } = useContext(MyContex)

    return (<div onClick={() => SetshowCard(!showCard)} style={{ display: 'flex' }} className="cart blue darket-4 white-text">
        <i style={{ lineHeight: 'unset' }} className="material-icons">shopping_cart</i>
        <span style={{ fontSize: '23px' }}>{cardItem.length ? cardItem.length : null}</span>
    </div>)
}

export default Cart;

