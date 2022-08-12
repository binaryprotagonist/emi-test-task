import { ACTION_SET_ORDER } from 'store/reducers/orderReducer';
import { Order } from 'models/orderModel';

/*
*  SET Order
*/
export const setOrder = (data:Order) => ({
    type : ACTION_SET_ORDER,
    payload : data,
});