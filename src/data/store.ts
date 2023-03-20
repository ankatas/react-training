import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction } from "redux-thunk";

// import { reducer as counterReducer } from "./slices/counter";
import * as counterSlice from "./slices/counter";
import * as usersSlice from "./slices/users";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  users: usersSlice.reducer,
});

const middleware: Middleware[] = [thunk];

export const store = createStore(
  rootReducer,
  // Persisted state pulled from e.g. local storage
  // See: https://github.com/rt2zz/redux-persist
  // {
  //   counter: {
  //     value: 23879238,
  //   },
  // },
  composeWithDevTools(applyMiddleware(...middleware))
);

// Infer root state's and dispatch function's types from the store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Setup an AppThunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
