import { Emi } from 'models/emiModel';
import { Action } from 'models/commonModel';

export const ACTION_SET_EMI = 'ACTION_SET_EMI';
export const ACTION_CREATE_EMI = 'ACTION_CREATE_EMI';

const initState: Array<Emi> = [];

export default function invoiceReducer(state = initState, action: Action) {
    switch (action.type) {
        case ACTION_CREATE_EMI:
            return action.payload;
        case ACTION_SET_EMI:
            return state.map((emi) => {
                if (parseInt(action.id) === emi.id) {
                    return { ...emi, ...action.payload };
                }
                return emi;
            });
        default:
            return state;
    }
}