import { count } from "firebase/firestore";
import { INCREMENT, DECREMENT } from "../actions/action";

const intialState = {
  count: 0,
};

const CounterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default CounterReducer;
