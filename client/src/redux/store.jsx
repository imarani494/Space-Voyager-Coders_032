import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";

export const store = legacy_createStore(Reducer, applyMiddleware(logger));
