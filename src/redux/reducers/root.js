import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { commentsReducer } from "./comments";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});
