import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const wrapperStore = () => store;

// eslint-disable-next-line @rushstack/typedef-var
export const wrapper = createWrapper(wrapperStore, {
	debug: process.env.NODE_ENV === "development",
});
