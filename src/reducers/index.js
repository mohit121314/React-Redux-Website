import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { reducerState } from "./stateReducer";
import { reducerDistrict } from "./districtReducer";
import { reducerChild } from "./childReducer";
import { reducerAddchild } from "./addchlidReducer";
import { reducerViewchild } from "./viewReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  states: reducerState,
  district: reducerDistrict,
  childs: reducerChild,
  addchilds: reducerAddchild,
  viewchild:reducerViewchild
});

export default rootReducer;
