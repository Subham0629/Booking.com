import { legacy_createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { reducer as hotelReducer } from "./Redux/Stay/reducer";

const rootReducer=combineReducers({
    hotelReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))