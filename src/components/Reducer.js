
export const Reducer = (state, { type, peyload }) => {

    switch (type) {

        case 'addCard': {

            const cardIdx = state.cardItem.findIndex((el) => el.id === peyload.id);
            if (cardIdx < 0) {

                return {
                    ...state,
                    cardItem: [...state.cardItem, { ...peyload, count: 1 }],
                    showAlert: peyload.name
                };
            }
            const it = state.cardItem.find((el) => el.id === peyload.id);

            return {
                ...state,
                cardItem: [...state.cardItem.slice(0, cardIdx), { ...it, count: it.count + 1 }, ...state.cardItem.slice(cardIdx + 1)],
                showAlert: peyload.name
            };
        }
        case 'edtiCard': {

            const cardIdx = state.cardItem.findIndex((el) => el.id === peyload.item.id);
            if (peyload.item.count + peyload.value <= 0) {

                return {
                    ...state,
                    cardItem: state.cardItem.filter(el => el.id !== peyload.item.id),
                };
            }
            const it = state.cardItem.find((el) => el.id === peyload.item.id);

            return {
                ...state,
                cardItem: [...state.cardItem.slice(0, cardIdx), { ...it, count: it.count + peyload.value }, ...state.cardItem.slice(cardIdx + 1)],
                showAlert: peyload.name
            };
        }
        case 'SetshowAlert': {
            return {
                ...state,
                showAlert: ''
            };
        }
        case 'SetshowCard': {
            return {
                ...state,
                showCard: !state.showCard
            };
        }
        case 'setItems': {
            return {
                ...state,
                loading: false,
                items: peyload
            };
        }
        case 'SetData': {
            return {
                ...state,
                loading: false,
                items: peyload
            };
        }
        case 'SetSearch': {
            return {
                ...state,
                SearchText: peyload
            };
        }
        default: return state;
    }
}

