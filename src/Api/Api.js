import { createContext, useState } from "react"

export const MyContex = createContext()

export const Api = (props) => {

    const [cardItem, SetcardItem] = useState([]);
    const [showCard, SetshowCard] = useState(false);
    const [showAlert, SetshowAlert] = useState('');

    const addCard = (item) => {

        const cardIdx = cardItem.findIndex((el) => el.id === item.id);
        SetshowAlert(item.name);
        if (cardIdx < 0) {

            return SetcardItem([...cardItem, { ...item, count: 1 }]);
        }
        const it = cardItem.find((el) => el.id === item.id);
        SetcardItem([...cardItem.slice(0, cardIdx), { ...it, count: it.count + 1 }, ...cardItem.slice(cardIdx + 1)]);
    }

    const edtiCard = (item, value) => {

        const cardIdx = cardItem.findIndex((el) => el.id === item.id);
        if (item.count + value <= 0) {

            return SetcardItem(cardItem.filter(el => el.id !== item.id));
        }
        const it = cardItem.find((el) => el.id === item.id);
        SetcardItem([...cardItem.slice(0, cardIdx), { ...it, count: it.count + value }, ...cardItem.slice(cardIdx + 1)]);
    }

    const value = {

        cardItem,
        showAlert,
        showCard,
        addCard,
        edtiCard,
        SetshowCard,
        SetshowAlert,
    }

    return <MyContex.Provider value={value}>
        {
            props.children
        }
    </MyContex.Provider>

}

