import { configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { AppStore } from "./types";

export const store: Store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
});

export const wrapperStore = (): Store => store;

export const wrapper = createWrapper<AppStore>(wrapperStore, {
	debug: process.env.NODE_ENV === "production" ? false : true,
});
