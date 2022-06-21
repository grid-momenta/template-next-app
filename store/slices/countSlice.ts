import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
		[HYDRATE]: (state, action) => {
			console.log("HYDRATE", action.payload.count);
			console.log(action.type);
			return {
				...state,
				products: state.products + action.payload.count.products,
			};
		},
	},
});

export const { increment, productIncrement, productDecrement } = countSlice.actions;

export default countSlice.reducer;
