import { ADD_CART_ITEMS } from 'src/Constansts';

const initialState = {
    product: [],
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case ADD_CART_ITEMS:
            return {
                ...state,
                product: action.payload,
            };


        default: {
            return state;
        }
    }
};

export default cartReducer;
