import { legacy_createStore } from "redux";
import CounterReducer from "./reducers/counterReducer";

const store=legacy_createStore(CounterReducer)

export default store;