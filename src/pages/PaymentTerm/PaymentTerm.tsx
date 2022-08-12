import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Emi } from 'models/emiModel';
import './PaymentTerm.scss';

const PaymentTerm = () => {

    const [paymentTerm, setPaymentTerm] = useState("");
    const navigate = useNavigate();
    const [selectedEmi,setSelectedEmi] = useState<any>({});

    const emis = useSelector((state: any) => state.emi);
    const order = useSelector((state: any) => state.order);

    const handleInputField = (e: any) => {
        setPaymentTerm(e.target.value);
    }

    useEffect(()=>{
        const emi = emis.find( (emi: Emi) => emi.isPaid === false);
        setSelectedEmi(emi);
        setPaymentTerm(emi?.id);
    },[])

    const nextStep = () => {
        if (paymentTerm) {
            navigate(`/checkout/${paymentTerm}`);
        }
    }

    if(!order.orderId) {
        return navigate('/');
    }

    return (
        <div className='payment-term'>
            <p className="heading">Choose your terms</p>
            <div className='payment-term-form'>
                {
                    emis.map((emi: Emi, index: number) => {
                        return (
                            <div className={`input-group ${emi.isPaid ? 'active' : ''}`} key={emi.id}>
                                <label >
                                    <input
                                        type='radio'
                                        onChange={handleInputField}
                                        name="term"
                                        value={emi.id}
                                        disabled={emi.isPaid}
                                        className='input-field'
                                        checked={selectedEmi?.id === emi.id ? true : false}
                                    />
                                    <p>{index + 1} Payment Due</p>
                                    <p>€{emi.amount}</p>
                                </label>
                            </div>)
                    })
                }
               { selectedEmi && Object.keys(selectedEmi).length > 0 ? <button onClick={nextStep} className='btn-continue'>Continue</button> : '' }
            </div>
        </div>
    )
}

export default PaymentTerm;