import { reducer } from "./User/reducer";
import { reducer as todoReducer } from "./todo/reducer";
import { combineReducers } from "redux";
export const rootReducer=combineReducers({
    todo:todoReducer,
    user:reducer
})