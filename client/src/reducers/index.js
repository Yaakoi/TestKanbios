import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import employeeReducer from "./employeeReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  employees: employeeReducer
});
