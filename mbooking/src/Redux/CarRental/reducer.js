import {
  CAR_NAME_ID,
  CAR_TRNTAL_ERROR,
  CAR_TRNTAL_LOADING,
  CAR_TRNTAL_SUCCESS,
} from "./actionType";

const initialState = {
  loading: false,
  error: false,
  carRental: [],
  carId: {},
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
      console.log("payload",payload)
      return {
        ...state,
        carId: payload,
      };
    }
    default: {
      return state;
    }
  }
};
