import React, { useContext } from 'react'
import { MyContex } from '../../Api/Api';
import './Cart.css';

const Cart = () => {

    const { cardItem, SetshowCard, showCard } = useContext(MyContex)

    return (<div onClick={() => SetshowCard(!showCard)} style={{ display: 'flex', top: '11rem' }} className="cart blue darket-4 white-text">
        <i style={{ lineHeight: 'unset' }} className="material-icons">shopping_cart</i>
        <span style={{ fontSize: '23px' }}>{cardItem.length ? cardItem.length : null}</span>
    </div>)
}

export default Cart;

