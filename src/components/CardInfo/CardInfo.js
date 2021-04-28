import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import './CardInfo.css';
import Loading from '../Loading/Loading'
import { API_KEY } from '../../config';

const CardInfo = () => {

    const { goBack } = useHistory();
    const { id } = useParams();
    const [infoRobot, SetDataInfo] = useState();

    useEffect(() => {

        fetch(`https://fortniteapi.io/v2/items/get?id=${id}&lang=en`, { headers: { 'Authorization': API_KEY } })
            .then((resp) => resp.json())
            .then((data) => {
                data.item && SetDataInfo(data.item)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return !infoRobot ? <Loading /> : (<div className="card info">
        <span onClick={goBack} className="btn-floating btn-large blue darken-1"><i className="material-icons">arrow_back</i></span>
        <div>
            <img style={{ width: 300, height: 300 }} className="activator" alt={1} src={infoRobot.images.background} />
        </div>
        <div>
            <h1 style={{ margin: 0, paddingBottom: 20 }}>{infoRobot.name}</h1>
            <div style={{ paddingTop: 15, textAlign: 'left' }}>
                <span style={{ paddingTop: 7, fontWeight: 'bold' }}>Description: </span>
                <span>{infoRobot.description}</span>
            </div>
        </div>
    </div >)
}

export default CardInfo;