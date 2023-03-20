import axios from "axios";
import { AnyAction } from "redux";
import { AppThunk } from "../store";

// todo: action types
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// todo: action creators: increment, decrement
export function increment(step: number) {
  return {
    type: INCREMENT,
    step,
  };
}

type IncrementAction = ReturnType<typeof increment>;
function isIncrementAction(action: AnyAction): action is IncrementAction {
  return action.type === INCREMENT;
}

export function decrement(step: number) {
  return {
    type: DECREMENT,
    step,
  };
}

type DecrementAction = ReturnType<typeof decrement>;
function isDecrementAction(action: AnyAction): action is DecrementAction {
  return action.type === DECREMENT;
}

export function delayedDecrement(step: number, delayMs: number): AppThunk {
  return (dispatch, getState) => {
    // dispatch: pending
    setTimeout(() => {
      dispatch(decrement(step));
      // dispatch: done
    }, delayMs);
  };
}

// todo: types for action objects, type guards for action objects

// todo: write a reducer function

// todo: handle the actions

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export function reducer(state = initialState, action: AnyAction) {
  if (isIncrementAction(action)) {
    // state.value = 123; <-- ILLEGAL!

    return {
      ...state,
      value: state.value + action.step,
    };
  }

  if (isDecrementAction(action)) {
    return {
      ...state,
      value: state.value - action.step,
    };
  }

  return state;
}
