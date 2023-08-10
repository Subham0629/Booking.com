import { GET_ATTRACTION_DATA } from "./actionType"
import axios from "axios"

export const getAttractionData = (dispatch) =>{
    axios
    .get(`https://booking-backend-w7ce.onrender.com/attractionsData`)
    .then((res) =>{
        dispatch({type:GET_ATTRACTION_DATA,payload:res.data})
    })
    .catch((err) => console.log(err))
}