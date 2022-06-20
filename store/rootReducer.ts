import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { countSlice } from "./slices/countSlice";
import { RootState } from "./types";

const rootReducer: Reducer = combineReducers({
	[countSlice.name]: countSlice.reducer,
});

export default rootReducer;

export const masterReducer = (state: RootState, action: AnyAction): Reducer => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		return nextState;
	} else return rootReducer(state, action);
};
