import { combineReducers } from "redux";
import user from "./user_reducer";
import file from "./file_reducer";

const rootReducer = combineReducers({
  user,
  file
});

export default rootReducer;
