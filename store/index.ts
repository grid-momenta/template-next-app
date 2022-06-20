import { configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { AppStore } from "./types";
import { masterReducer } from "./rootReducer";

export const store: Store = configureStore({
	reducer: masterReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
});

export const wrapperStore = (): Store => store;

// eslint-disable-next-line @rushstack/typedef-var
export const wrapper = createWrapper<AppStore>(wrapperStore, {
	debug: process.env.NODE_ENV === "development",
});
