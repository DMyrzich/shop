import React, { useEffect, useContext } from 'react';
import { MyContex } from '../../Api/Api';
import './Alert.css';


const Alert = () => {

    const { showAlert, SetshowAlert } = useContext(MyContex)

    useEffect(() => {


        const timerId = setTimeout(SetshowAlert, 900);

        return () => clearTimeout(timerId);

        // eslint-disable-next-line
    }, [showAlert]);

    return (
        <div id="toast-container">
            <div className="toast alert-block" style={{ borderRadius: 5 }}>
                <i className="material-icons alert-info">info_outline</i>
                {showAlert} успешно добавлен в корзину
            </div>
        </div>
    )

}

export default Alert;