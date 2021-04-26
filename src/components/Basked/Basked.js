import React, { useContext } from 'react';
import { MyContex } from '../../Api/Api';
import './Backed.css'

const Backed = () => {

    const { SetshowCard, showCard, cardItem, edtiCard } = useContext(MyContex)

    const totalPrice = cardItem.reduce((sum, el) => {

        return sum + el.price * el.count;
    }, 0);

    return (<ul style={{ padding: 10 }} className="collection with-header backed">
        <li className="collection-item active blue darken-3"><h6>Корзина</h6></li>
        {
            cardItem.length > 0 ? cardItem.map((el, idx) =>
                <li key={idx} style={{ paddingLeft: 10 }} className="collection-item">
                    <span className="edit-button">
                        <button className="btn blue darken-3" onClick={() => edtiCard(el, +1)}><i className="material-icons">add</i></button>
                        <button style={{ marginLeft: 3 }} className="btn blue darken-3" onClick={() => edtiCard(el, -1)}><i className="material-icons">remove</i></button>
                        <button style={{ marginLeft: 3 }} className="btn blue darken-3" onClick={() => edtiCard(el, -999)}><i className="material-icons">clear</i></button>
                    </span>
                    <div style={{ display: 'flex' }}>
                        <p style={{ margin: '25px 0px' }}>№{idx + 1}</p>
                        <img style={{ width: 70, height: 70, color: 'white' }} src={el.image} alt="Корзина"></img>
                        <div>
                            <p style={{ margin: '8px 0px' }}>Товар: {el.name}</p>
                            <p style={{ position: 'absolute', right: '3rem' }}>Количество: {el.count}</p>
                            <p>Цена: {el.price} руб.</p>
                        </div>
                    </div>
                </li>) :
                (<div style={{ margin: 0 }} className="row">
                    <div style={{ margin: 0, padding: 0, width: '100%' }} className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Ваша корзина пуста :(</span>
                                <div style={{ display: 'flex' }} >
                                    <img style={{ width: 130, height: 130, color: 'white' }} src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG40.png" alt="Корзина"></img>
                                    <div>
                                        <p style={{ padding: 15 }}>Ваша корзина пуста, но вы ее можете легко пополнить положив туда любой товар, который Вам понравится! Приятных покупок!</p>
                                        <button onClick={() => SetshowCard(!showCard)} className="btn orange darken-3" style={{ margin: '0px 15px' }}>Начать покупки</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
        }
        <i onClick={() => SetshowCard(!showCard)} className="material-icons close-backed white-text">close</i>
        <li className="collection-item active blue darken-3"><p style={{ margin: '10px 0px' }}>{cardItem.length > 0 ? 'Общая стоймость:' + totalPrice + ' руб.' : 'Желаем вам притных покупок!'}</p></li>
    </ul>)
}

export default Backed;