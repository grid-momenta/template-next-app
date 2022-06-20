import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import countReducers from "./slices/countSlice";
import { RootState } from "./types";

const rootReducer: Reducer = combineReducers({
	count: countReducers,
});

export default rootReducer;

export const masterReducer = (state: RootState, action: any): Reducer => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			count: {
				products: action.payload.count.products,
			},
		};
		return nextState;
	} else return rootReducer(state, action);
};
