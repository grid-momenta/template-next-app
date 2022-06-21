import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { diff } from "jsondiffpatch";
import { HYDRATE } from "next-redux-wrapper";
interface CountState {
	products: number;
	balance: number;
}

const initialState: CountState = {
	products: 0,
	balance: 1000,
};

const incrementExternal: CaseReducer<CountState, PayloadAction<number>> = (state, action) => {
	state.products += action.payload;
};

export const countSlice = createSlice({
	name: "count",
	initialState: initialState as CountState,
	reducers: {
		increment: incrementExternal,
		productIncrement: (state: CountState, action: PayloadAction<number>) => {
			state.products += action.payload;
		},
		productDecrement: (state: CountState, action: PayloadAction<number>) => {
			state.products -= action.payload;
		},
	},
	extraReducers: {
		// HYDRATE behavior is unstable.
		// __NEXT_REDUX_WRAPPER_HYDRATE__ is called (SSR in about page) at least twice.
		// Will be updated if any solution is found.
		[HYDRATE]: (state, action) => {
			const clientState = { ...state };
			const serverState = { ...action.payload };
			// console.log("======================");
			// console.log("serverState", serverState);
			// console.log("clientState", clientState);
			const stateDiff = diff(clientState, serverState);
			// console.log("stateDiff", stateDiff);
			const isDiff1 = stateDiff?.count?.[0]?.products;
			// console.log("isDiff1", isDiff1);
			// console.log("======================");
			state.products = isDiff1 ? serverState.count.products + clientState.products : clientState.products;
		},
	},
});

export const { increment, productIncrement, productDecrement } = countSlice.actions;

export default countSlice.reducer;
