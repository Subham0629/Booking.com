import {
  Asia_Success,
  Europe_Success,
  FLIGHT_DETAIL_DELETE,
  Flights_Success,
  NorthAmerica_Success,
  Oceania_Success,
  POPULAR_FLIGHT_ADD,
  Popular_Flight_Success,
  Request_Failure,
  Request_Pending,
  Trending_Flight_Success,
} from "./actionType";

const initailVal = {
  isLoading: false,
  isError: false,
  popularFlight: [],
  trendingCity: [],
  asiaa: [],
  europee: [],
  northAmericaa: [],
  oceaniaa: [],
  flightss: [],
};

export const reducer = (state = initailVal, { type, payload }) => {
  switch (type) {
    case Request_Pending:
      return {
        ...state,
        isLoading: true,
      };
    case Popular_Flight_Success:
      return {
        ...state,
        isLoading: false,
        popularFlight: payload,
      };
    case Trending_Flight_Success:
      return {
        ...state,
        isLoading: false,
        trendingCity: [...payload],
      };
    case Asia_Success:
      return {
        ...state,
        isLoading: false,
        asiaa: [...payload],
      };
    case Europe_Success:
      return {
        ...state,
        isLoading: false,
        europee: [...payload],
      };
    case NorthAmerica_Success:
      return {
        ...state,
        isLoading: false,
        northAmericaa: [...payload],
      };
    case Oceania_Success:
      return {
        ...state,
        isLoading: false,
        oceaniaa: [...payload],
      };
    case Flights_Success:
      return {
        ...state,
        isLoading: false,
        flightss: [...payload],
      };

    case Request_Failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case POPULAR_FLIGHT_ADD: {
      return {
        ...state,
        popularFlight: [...state.popularFlight, payload],
      };
    }

    case FLIGHT_DETAIL_DELETE:{
      return{
        ...state,
        popularFlight:state.popularFlight.filter((el)=>el.id!==payload)
      }
    }
    default:
      return state;
  }
};
