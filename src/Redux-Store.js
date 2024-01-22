
import { createStore } from 'redux';
const initialState = {
    cart: [], // Håller produkterna i kundvagnen
    user: {}, // Håller användarens information
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'CHECKOUT':
            return {
                ...state,
                cart: [], // Nollställ kundvagnen efter genomförd betalning
            };

        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
