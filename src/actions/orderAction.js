
import { ADD_CART_ITEMS,  } from "src/Constansts";




// new
export const addToCartBag = (item) => {
	
	return function (dispatch) {
		dispatch({
			type:ADD_CART_ITEMS,
			payload: item,
		});
	};
};




