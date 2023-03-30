import { legacy_createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk";
import {reducer as attractionReducer} from "./Redux/attractionData/reducer"

const rootReducer=combineReducers({
   attractionReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))