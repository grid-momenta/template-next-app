import { CaseReducer, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface CountState {
	products: number;
}

const initialState: CountState = {
	products: 0,
};

const incrementExternal: CaseReducer<CountState, PayloadAction<number>> = (state, action) => {
	state.products += action.payload;
};

export const countSlice: Slice = createSlice({
	name: "count",
	initialState: initialState,
	reducers: {
		increment: incrementExternal,
		productIncrement: (state: CountState, action: PayloadAction<number>) => {
			state.products += action.payload;
		},
		productDecrement: (state: CountState, action: PayloadAction<number>) => {
			state.products -= action.payload;
		},
	},
});

export const { increment, productIncrement, productDecrement } = countSlice.actions;

export default countSlice.reducer;
