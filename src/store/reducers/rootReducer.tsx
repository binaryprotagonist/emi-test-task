import { combineReducers } from 'redux';
import emiReducer from "./emiReducer";
import orderReducer from "./orderReducer";
import creditCardReducer from "./creditCardReducer";

export const rootReducer = combineReducers({
    emi: emiReducer,
    order: orderReducer,
    creditCard: creditCardReducer,
})