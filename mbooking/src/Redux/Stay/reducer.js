import {
  ADD_HOTEL,
  CART_REQUEST_SUCCESS,
  DELETE_STAY_HOTEL,
  GET_CART_REQUEST_SUCCESS,
  HOTEL_REQUEST_FAILURE,
  HOTEL_REQUEST_PENDING,
  HOTEL_REQUEST_SUCCESS,
  PLACES_REQUEST_SUCCESS,
} from "./actionType";

const initialstate = {
  isLoading: false,
  isError: false,
  hotels: [],
  places: [],
  hotelcart: [],
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case HOTEL_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case HOTEL_REQUEST_SUCCESS:
      return { ...state, isLoading: false, hotels: payload };
    case PLACES_REQUEST_SUCCESS:
      return { ...state, isLoading: false, places: payload };
    case HOTEL_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    case GET_CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, hotelcart: payload };
    case ADD_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, payload],
      };
    case DELETE_STAY_HOTEL: {
      return {
        ...state,
        hotels: state.hotels.filter((el) => el.id !== payload),
      };
    }
    default:
      return state;
  }
};
