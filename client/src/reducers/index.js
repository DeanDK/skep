import { combineReducers } from "redux";
import user from "./user_reducer";
import file from "./file_reducer";
import internship from "./internship_reducer";

const rootReducer = combineReducers({
  user,
  file,
  internship
});

export default rootReducer;
