import axios from "axios";
import {
  CAR_ADD,
  CAR_NAME_ID,
  CAR_TRNTAL_ERROR,
  CAR_TRNTAL_LOADING,
  CAR_TRNTAL_SUCCESS,
  DELETE_CAR,
  CAR_CART_ADD,
  CAR_CART_GET,
  CAR_CART_DELETE,
} from "./actionType";

export const carDataName = (obj) => async (dispatch) => {
  dispatch({ type: CAR_TRNTAL_LOADING });
  try {
    let res = await axios.get("http://localhost:8080/car-availables", obj);
    console.log("res", res.data);
    dispatch({ type: CAR_TRNTAL_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: CAR_TRNTAL_ERROR });
  }
};

export const CarName = (id) => async (dispatch) => {
  dispatch({ type: CAR_TRNTAL_LOADING });
  try {
    let res = await axios.get(`http://localhost:8080/car-availables/${id}`);
    dispatch({ type: CAR_NAME_ID, payload: res.data });
    console.log("res.data", res.data);
  } catch (err) {
    console.log("err", err);
    dispatch({ type: CAR_TRNTAL_ERROR });
  }
};

export const carAddDATA = (payload) => async (dispatch) => {
  console.log("payload", payload);
  dispatch({ type: CAR_TRNTAL_LOADING });
  try {
    let res = await axios.post(`http://localhost:8080/car-availables`, payload);
    dispatch({ type: CAR_ADD, payload: res.data });
    console.log("res.data", res.data);
  } catch (err) {
    console.log("err", err);
    dispatch({ type: CAR_TRNTAL_ERROR });
  }
};

export const CarDetailDelete = (payload) => async (dispatch) => {
  console.log("payload", payload);
  dispatch({ type: CAR_TRNTAL_LOADING });
  try {
    let res = await axios.post(
      `http://localhost:8080/car-availables/${payload}`
    );
    console.log("res", res);
    dispatch({ type: CAR_CART_ADD, payload: payload });
  } catch (err) {
    console.log("err", err);
  }
};
export const carCartAdd = (payload) => async (dispatch) => {
  console.log("payloadCartvlaue", payload);
  dispatch({ type: CAR_TRNTAL_LOADING });
  try {
    let res = await axios.post(`http://localhost:8080/carcart`, payload);
    console.log("res", res);
    dispatch({ type: CAR_CART_ADD, payload: payload });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: CAR_TRNTAL_ERROR });
  }
};
export const carCartGet = () => async (dispatch) => {
  dispatch({ type: CAR_TRNTAL_LOADING });
  try {
    let res = await axios.get(`http://localhost:8080/carcart`);
    console.log("res", res);
    dispatch({ type: CAR_CART_GET, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: CAR_TRNTAL_ERROR });
  }
};

export const deleteCarCart = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`http://localhost:8080/carcart/${id}`);
    dispatch({ type: CAR_CART_DELETE, payload: id });
  } catch (err) {
    console.log("err", err);
  }
};
