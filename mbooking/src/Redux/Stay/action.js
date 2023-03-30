import axios from "axios"
import { HOTEL_REQUEST_FAILURE, HOTEL_REQUEST_PENDING, HOTEL_REQUEST_SUCCESS, PLACES_REQUEST_SUCCESS } from "./actionType"

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