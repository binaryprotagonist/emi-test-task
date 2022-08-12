import { Action } from 'models/commonModel';
import { CreditCard } from 'models/creditCardModel';

export const ACTION_SET_CREDIT_CARD = 'ACTION_SET_CREDIT_CARD';

const initState: CreditCard = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    state: '',
    city: ''
}

export default function creditCardReducer(state = initState, action: Action) {
    switch (action.type) {
        case ACTION_SET_CREDIT_CARD:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}