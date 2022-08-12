import { ACTION_CREATE_EMI, ACTION_SET_EMI } from 'store/reducers/emiReducer';
import { Emi } from 'models/emiModel';

/*
*  CREATE EMI
*/
export const createEmi = (data:Array<Emi>) => ({
    type : ACTION_CREATE_EMI,
    payload : data,
});

/*
*  SET EMI
*/
export const setEMI = (id:any,data:{ isPaid : boolean, date: string }) => ({
    type : ACTION_SET_EMI,
    payload : data,
    id
});