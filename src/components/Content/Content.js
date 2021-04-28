import React, { useEffect, useContext } from 'react';
import { MyContex } from '../../Api/Api';
import { API_KEY, API_URL } from '../../config';
import Items from '../Items/Items'
import Search from '../Search/Search'
import Loading from '../Loading/Loading'
import Cart from '../Cart/Cart'
import Backed from '../Basked/Basked'
import Alert from '../Alert/Alert';
import { useLocation } from 'react-router-dom';

const Content = () => {

    const { loading, items, setItems, showCard, showAlert } = useContext(MyContex);

    const { search } = useLocation();

    useEffect(() => {

        fetch(API_URL, { headers: { 'Authorization': API_KEY } })
            .then((resp) => resp.json())
            .then((data) => data.featured && setItems(data.featured))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const filter = (items) => {

        if (search.includes('=')) {

            const h = decodeURI(search.split('=')[1]);
            if (h.length > 0) {

                return items.filter((el) => el.name.toLowerCase().includes(h.toLowerCase()))
            }
        }
        return items;
    }

    return (<div style={{ padding: '1rem' }}>
        <Search />
        <Cart />
        {
            loading ? <Loading /> : <Items items={filter(items)} />
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

