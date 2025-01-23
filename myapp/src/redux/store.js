import { legacy_createStore, applyMiddleware } from "redux";
import CounterReducer from "./reducers/counterReducer";
import {thunk} from "redux-thunk" 

const store = legacy_createStore(CounterReducer,applyMiddleware(thunk));

export default store;
