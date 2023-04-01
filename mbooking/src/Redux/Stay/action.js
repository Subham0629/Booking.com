import axios from "axios"
import { CART_REQUEST_SUCCESS, GET_CART_REQUEST_SUCCESS, HOTEL_REQUEST_FAILURE, HOTEL_REQUEST_PENDING, HOTEL_REQUEST_SUCCESS, PLACES_REQUEST_SUCCESS } from "./actionType"

export const getHotels=(onsearch)=>(dispatch)=>{
    console.log(onsearch);
    dispatch({type:HOTEL_REQUEST_PENDING})
     axios.get(`http://localhost:8080/hotels`,onsearch)
     .then((res)=>{
         dispatch({type:HOTEL_REQUEST_SUCCESS,payload:res.data})})
     .catch((res)=>dispatch({type:HOTEL_REQUEST_FAILURE}))
}

export const getPlaces=(dispatch)=>{
    dispatch({type:HOTEL_REQUEST_PENDING})
     axios.get(`http://localhost:8080/places`)
     .then((res)=>{
         dispatch({type:PLACES_REQUEST_SUCCESS,payload:res.data})})
     .catch((res)=>dispatch({type:HOTEL_REQUEST_FAILURE}))
}

export const postHotelCart=(obj)=>(dispatch)=>{
    console.log(obj);
    dispatch({type:HOTEL_REQUEST_PENDING})
     axios.post(`http://localhost:8080/hotelcart`,obj)
     .then((res)=>{console.log(res.data);
         dispatch({type:CART_REQUEST_SUCCESS,payload:res.data})})
     .catch((res)=>dispatch({type:HOTEL_REQUEST_FAILURE}))
}

export const getHotelCart=(dispatch)=>{
    dispatch({type:HOTEL_REQUEST_PENDING})
     axios.get(`http://localhost:8080/hotelcart`)
     .then((res)=>{
         dispatch({type:GET_CART_REQUEST_SUCCESS,payload:res.data})})
     .catch((res)=>dispatch({type:HOTEL_REQUEST_FAILURE}))
}