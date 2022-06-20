import { configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { masterReducer } from "./rootReducer";
import { AppStore } from "./types";

export const store: Store = configureStore({
	reducer: masterReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
});

export const wrapperStore = (): Store => store;

export const wrapper = createWrapper<AppStore>(wrapperStore, { debug: true });
