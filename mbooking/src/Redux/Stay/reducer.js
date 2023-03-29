import { HOTEL_REQUEST_FAILURE, HOTEL_REQUEST_PENDING, HOTEL_REQUEST_SUCCESS, PLACES_REQUEST_SUCCESS } from "./actionType"

const initialstate={
    isLoading: false,
    isError: false,
    hotels: [],
    places:[],
  }

  export const reducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case HOTEL_REQUEST_PENDING:return {...state,isLoading:true}
        case HOTEL_REQUEST_SUCCESS:return {...state,isLoading:false,hotels:payload}
        case PLACES_REQUEST_SUCCESS:return {...state,isLoading:false,places:payload}
        case HOTEL_REQUEST_FAILURE:return {...state,isLoading:false,isError:true}
            
            
        default:
            return state;
    }
  }