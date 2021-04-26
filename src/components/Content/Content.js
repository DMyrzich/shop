import React, { useEffect, useState, useContext } from 'react';
import { MyContex } from '../../Api/Api';
import { API_KEY, API_URL } from '../../config';
import Items from '../Items/Items'
import Loading from '../Loading/Loading'
import Cart from '../Cart/Cart'
import Backed from '../Basked/Basked'
import Alert from '../Alert/Alert';

const Content = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cardItem, showCard, showAlert } = useContext(MyContex);

    useEffect(() => {

        fetch(API_URL, { headers: { 'Authorization': API_KEY } })
            .then((resp) => resp.json())
            .then((data) => {
                data.featured && setItems(data.featured)
                setLoading(false);
            })

    }, []);

    return (<div style={{ padding: '1rem' }}>
        <Cart cardItem={cardItem} />
        {
            loading ? <Loading /> : <Items items={items} />
        }
        {
            showCard ? <Backed /> : null
        }
        {
            showAlert ? <Alert /> : null
        }
    </div>)
}

export default Content;

