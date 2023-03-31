import { GET_ATTRACTION_DATA } from "./actionType";
const initialState ={
    attractionData:[]
}
export const reducer=((state=initialState,{type,payload}) =>{
switch(type){
    case GET_ATTRACTION_DATA:{
        return{
            ...state,attractionData:payload
        }
    }
    default:{
        return{
            ...state
        }
    }
        
}
})