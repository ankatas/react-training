import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppDispatch, RootState } from "./store";

// Typed hooks: use these in your components instead of the usual useDispatch, useSelector
export const useAppDispatch: () => AppDispatch &
  ThunkDispatch<RootState, unknown, AnyAction> = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
