import axios from "axios";
import {
  CART_REQUEST_SUCCESS,
  DELETE_STAY_HOTEL,
  GET_CART_REQUEST_SUCCESS,
  HOTELCART_DELETE,
  HOTEL_REQUEST_FAILURE,
  HOTEL_REQUEST_PENDING,
  HOTEL_REQUEST_SUCCESS,
  PLACES_REQUEST_SUCCESS,
  ADMIN_DELETE
} from "./actionType";

export const getHotels = (onsearch) => (dispatch) => {
  console.log(onsearch);
  dispatch({ type: HOTEL_REQUEST_PENDING });
  axios
    .get(`http://localhost:8080/hotels`, onsearch)
    .then((res) => {
      dispatch({ type: HOTEL_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((res) => dispatch({ type: HOTEL_REQUEST_FAILURE }));
};

export const getPlaces = (dispatch) => {
  dispatch({ type: HOTEL_REQUEST_PENDING });
  axios
    .get(`http://localhost:8080/places`)
    .then((res) => {
      dispatch({ type: PLACES_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((res) => dispatch({ type: HOTEL_REQUEST_FAILURE }));
};

export const postHotelCart = (obj) => (dispatch) => {
  console.log(obj);
  dispatch({ type: HOTEL_REQUEST_PENDING });
  axios
    .post(`http://localhost:8080/hotelcart`, obj)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: CART_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((res) => dispatch({ type: HOTEL_REQUEST_FAILURE }));
};

export const getHotelCart = (dispatch) => {
  dispatch({ type: HOTEL_REQUEST_PENDING });
  axios
    .get(`http://localhost:8080/hotelcart`)
    .then((res) => {
      dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((res) => dispatch({ type: HOTEL_REQUEST_FAILURE }));
};

export const addHotels = (payload) => (dispatch) => {
  console.log("hello", payload);
  dispatch({ type: HOTEL_REQUEST_PENDING });
  axios
    .post(`http://localhost:8080/hotels`, payload)
    .then((res) => {
      dispatch({ type: HOTEL_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((res) => dispatch({ type: HOTEL_REQUEST_FAILURE }));
};

export const DeleteHotel = (id) => async (dispatch) => {
  dispatch({ type: HOTEL_REQUEST_PENDING });
  try {
    let res = await axios.delete(`http://localhost:8080/hotels/${id}`);
    console.log(res);
    dispatch({ type: DELETE_STAY_HOTEL, payload: id });
  } catch (err) {
    dispatch({ type: HOTEL_REQUEST_FAILURE });
  }
};


export const deleteHotelCart = (id) => async (dispatch) => {
  dispatch({ type: HOTEL_REQUEST_PENDING });
  try {
    let res = await axios.delete(`http://localhost:8080/hotelcart/${id}`);
    console.log(res);
    dispatch({ type: HOTELCART_DELETE, payload: id });
  } catch (err) {
    dispatch({ type: HOTEL_REQUEST_FAILURE });
  }
};



