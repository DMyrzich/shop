import { createContext, useReducer } from "react"
import { Reducer } from '../components/Reducer'

export const MyContex = createContext()

const inutialState = {

    cardItem: [],
    items: [],
    showCard: false,
    loading: true,
    showAlert: '',
}

export const Api = ({ children }) => {

    const [{ cardItem, items, showCard, loading, showAlert, infoRobot }, dispatch] = useReducer(Reducer, inutialState);

    const addCard = (item) => {

        dispatch({ type: 'addCard', peyload: item });
    }

    const edtiCard = (item, value) => {

        dispatch({ type: 'edtiCard', peyload: { item, value } });
    }

    const SetshowAlert = () => {

        dispatch({ type: 'SetshowAlert' });
    }

    const SetshowCard = () => {

        dispatch({ type: 'SetshowCard' });
    }

    const setItems = (data) => {

        dispatch({ type: 'setItems', peyload: data });
    }

    const value = {
        cardItem,
        items,
        showCard,
        loading,
        showAlert,
        infoRobot,
        setItems,
        SetshowCard,
        SetshowAlert,
        edtiCard,
        addCard,
    }

    return <MyContex.Provider value={value}>
        {
            children
        }
    </MyContex.Provider>

}

