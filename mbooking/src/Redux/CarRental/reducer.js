import {
  CAR_ADD,
  CAR_CART_ADD,
  CAR_NAME_ID,
  CAR_TRNTAL_ERROR,
  CAR_TRNTAL_LOADING,
  CAR_TRNTAL_SUCCESS,
  DELETE_CAR,
} from "./actionType";

const initialState = {
  loading: false,
  error: false,
  carRental: [],
  carId: {},
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CAR_TRNTAL_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CAR_TRNTAL_SUCCESS: {
    
      return {
        ...state,
        loading: false,
        carRental: payload,
      };
    }
    case CAR_TRNTAL_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case CAR_NAME_ID: {
     
      return {
        ...state,
        carId: payload,
      };
    }
    case CAR_ADD: {
      return {
        ...state,
        carRental: [...state.carRental, payload],
      };
    }

    case DELETE_CAR: {
      return {
        ...state,
        carRental: state.carRental.filter((el) => el.id !== payload),
      };
    }
    case CAR_CART_ADD: {
      console.log("cartPayloadValue",payload)
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }

    default: {
      return state;
    }
  }
};
