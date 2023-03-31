import axios from "axios";
import {
  CAR_NAME_ID,
  CAR_TRNTAL_ERROR,
  CAR_TRNTAL_LOADING,
  CAR_TRNTAL_SUCCESS,
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
    console.log("res.data",res.data)
  } catch (err) {
    console.log("err", err);
    dispatch({ type: CAR_TRNTAL_ERROR });
  }
};
