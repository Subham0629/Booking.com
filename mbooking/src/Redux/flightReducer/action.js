import {
  Asia_Success,
  Europe_Success,
  Flights_Success,
  NorthAmerica_Success,
  Oceania_Success,
  Popular_Flight_Success,
  Request_Failure,
  Request_Pending,
  Trending_Flight_Success,
  POPULAR_FLIGHT_ADD,
  FLIGHT_DETAIL_DELETE,
} from "./actionType";
import axios from "axios";

export const popularFligthData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/popular-flight")
    .then((res) => {
      dispatch({ type: Popular_Flight_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const trendingCitiesData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/trending-cities")
    .then((res) => {
      dispatch({ type: Trending_Flight_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const asiaData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/Asia")
    .then((res) => {
      dispatch({ type: Asia_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const europeData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/Europe")
    .then((res) => {
      dispatch({ type: Europe_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const northAmericaData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/North-America")
    .then((res) => {
      dispatch({ type: NorthAmerica_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const oceaniaData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/Oceania")
    .then((res) => {
      dispatch({ type: Oceania_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const flightData = (obj) => (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("https://booking-backend-w7ce.onrender.com/flights", obj)
    .then((res) => {
      dispatch({ type: Flights_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};

export const addPopularFlight = (obj) => (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .post("https://booking-backend-w7ce.onrender.com/popular-flight", obj)
    .then((res) => {
      dispatch({ type: POPULAR_FLIGHT_ADD, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};

export const flightDelete = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`https://booking-backend-w7ce.onrender.com/popular-flight/${id}`);
    dispatch({ type: FLIGHT_DETAIL_DELETE, payload: id });
  } catch (err) {
    console.log("err", err);
  }
};
