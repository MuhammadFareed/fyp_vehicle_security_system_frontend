import { combineReducers } from "redux";
import logInReducer from "./AuthReducers/logInReducers";
import signUpReducer from "./AuthReducers/signUpReducers";

const rootReducer = combineReducers({
   signUp: signUpReducer,
   logIn: logInReducer,
})

export default rootReducer;   