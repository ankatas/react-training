import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  // todo: add reducers here
});

const middleware: Middleware[] = [thunk];

export const store = createStore(
  rootReducer,
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
