import { combineReducers } from "@reduxjs/toolkit";
import { countSlice } from "./slices/countSlice";

const rootReducer = combineReducers({
	[countSlice.name]: countSlice.reducer,
});

export default rootReducer;
