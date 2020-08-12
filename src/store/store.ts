import {configureStore, applyMiddleware, MiddlewareArray} from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import logger from "./log.middleware";

const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(logger),
});

export type AppDispatch = typeof store.dispatch

export default store
