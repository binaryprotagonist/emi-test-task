import { ACTION_SET_CREDIT_CARD } from 'store/reducers/creditCardReducer';
import { CreditCard } from 'models/creditCardModel';

/**
 * Set credit card
 */

export const setCreditCart = (data:CreditCard) => ({
    type: ACTION_SET_CREDIT_CARD,
    payload: data
})