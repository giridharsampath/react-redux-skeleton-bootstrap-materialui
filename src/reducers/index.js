import { combineReducers } from "redux";
import appState from "#reducers/appState";

const rootReducer = combineReducers({
  appState,
});

export default rootReducer;
