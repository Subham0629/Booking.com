import { GET_ATTRACTION_DATA } from "./actionType"
import axios from "axios"

export const getAttractionData = (dispatch) =>{
    axios
    .get(`http://localhost:8080/attractionsData`)
    .then((res) =>{
        dispatch({type:GET_ATTRACTION_DATA,payload:res.data})
    })
    .catch((err) => console.log(err))
}