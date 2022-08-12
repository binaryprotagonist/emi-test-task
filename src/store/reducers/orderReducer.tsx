import { Action } from 'models/commonModel';
import { Order } from 'models/orderModel';

export const ACTION_SET_ORDER = 'ACTION_SET_ORDER';

const initState: Order = {
        orderId: null,
        amount: null,
        isEmi: false,
        totalEmi: 0
}

export default function invoiceReducer(state = initState, action: Action) {
    switch (action.type) {
        case ACTION_SET_ORDER:
            return {...state,...action.payload};
        default:
            return state;
    }
}