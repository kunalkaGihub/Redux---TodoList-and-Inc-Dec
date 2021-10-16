import changeTheNumber from "./incDec";

import todoReducers from './todoReducers';

//multiple reducers ko ek sath rkhne k liye
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   // changeTheNumber : changeTheNumber
   changeTheNumber,
   todoReducers
});

export default rootReducer;