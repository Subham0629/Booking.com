import { legacy_createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk";

import { reducer as hotelReducer } from "./Redux/Stay/reducer";
import {reducer as flightReducer} from "../src/Redux/flightReducer/reducer";


const rootReducer=combineReducers({
    hotelReducer,
    flightReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))