import './TransactionSuccess.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setEMI } from 'store/action/emiAction';
import moment from 'moment';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const emis = useSelector((state: any) => state.emi);
    const order = useSelector((state: any) => state.order);
    const currentDate = moment().format('MM-DD-YYYY');
    const emiId = params.emi;

    const [paidEmi] = useState(() => {
        return emis.find((emi: any) => emi.isPaid === false);
    })

    const nextStep = async () => {
       await dispatch(setEMI(emiId, { isPaid: true, date: currentDate }));
        navigate('/payment-term');
    }

    if(!order.orderId) {
        return navigate('/');
    }

    return (
        <div className='transaction-success'>
            <p className="heading">Invoice Paid</p>
            <p>The invoice from Lufthana for the amount of €{paidEmi.amount} was paid on {currentDate}</p>
            <button className='btn-marketplace' onClick={nextStep}>Return to marketplace</button>
        </div>
    )
}

export default Checkout;