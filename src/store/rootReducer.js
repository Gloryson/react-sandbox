import { combineReducers } from "redux";
import { tempReducer } from "./tempReducer";

export const rootReducer = combineReducers(
  {
    arr1:tempReducer
  }
)