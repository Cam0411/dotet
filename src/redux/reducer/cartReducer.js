import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from '../constant/cartConstant';

const initialState = {
  cartItems: [],
};

export const getProductCart  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.title === newItem.title);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.title === existingItem.title ? newItem : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.slug !== action.payload),
      };

    case RESET_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

