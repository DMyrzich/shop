import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const { goBack } = useHistory();

    return (<>
        <h1>Страница не найдена</h1>
        <button className="btn" onClick={goBack}>Назад</button>
    </>)
}

export default NotFound;