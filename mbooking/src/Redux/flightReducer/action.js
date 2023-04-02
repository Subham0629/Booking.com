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
    .get("http://localhost:8080/popular-flight")
    .then((res) => {
      dispatch({ type: Popular_Flight_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const trendingCitiesData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("http://localhost:8080/trending-cities")
    .then((res) => {
      dispatch({ type: Trending_Flight_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const asiaData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("http://localhost:8080/Asia")
    .then((res) => {
      dispatch({ type: Asia_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const europeData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("http://localhost:8080/Europe")
    .then((res) => {
      dispatch({ type: Europe_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const northAmericaData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("http://localhost:8080/North-America")
    .then((res) => {
      dispatch({ type: NorthAmerica_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const oceaniaData = (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("http://localhost:8080/Oceania")
    .then((res) => {
      dispatch({ type: Oceania_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};
export const flightData = (obj) => (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .get("http://localhost:8080/flights", obj)
    .then((res) => {
      dispatch({ type: Flights_Success, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};

export const addPopularFlight = (obj) => (dispatch) => {
  dispatch({ type: Request_Pending });
  axios
    .post("http://localhost:8080/popular-flight", obj)
    .then((res) => {
      dispatch({ type: POPULAR_FLIGHT_ADD, payload: res.data });
    })
    .catch(() => dispatch({ type: Request_Failure }));
};

export const flightDetals = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`http://localhost:8080/popular-flight/${id}`);
    dispatch({ type: FLIGHT_DETAIL_DELETE, payload: id });
  } catch (err) {
    console.log("err", err);
  }
};
