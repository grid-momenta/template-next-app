import { combineReducers, Reducer } from "@reduxjs/toolkit";
import countReducers from "./slices/countSlice";

const rootReducer: Reducer = combineReducers({
	count: countReducers,
});

export default rootReducer;
