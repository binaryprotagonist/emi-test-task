import './Checkout.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreditCart } from 'store/action/creditCardAction';

const Checkout = () => {
    const creditCard = useSelector( (state : any) => state.creditCard);
    const [cardNumber, seCardNumber] = useState(creditCard.cardNumber);
    const [expiryDate, setExpiryDate] = useState(creditCard.expiryDate);
    const [cvv, setCvv] = useState(creditCard.cvv);
    const [state, setState] = useState(creditCard.state);
    const [city, setCity] = useState(creditCard.city);
    const [transfer, setTransfer] = useState('bank-transfer');
    const order = useSelector((state: any) => state.order);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const nextStep = () => {
        if (cardNumber && expiryDate && cvv && state && city && transfer) {
            dispatch(setCreditCart({cardNumber,expiryDate,cvv,state,city}))
            navigate(`/transaction-success/${params.emi}`);
        }
    }

    if(!order.orderId) {
        return navigate('/');
    }

    return (
        <div className='checkout'>
            <div className='checkout-head'>
                <p className="heading">Your payment</p>
                <p>Net Term <span>30 days</span></p>
                <p>Net due <span>20/05/2022</span></p>
            </div>
            <div className='divider'></div>
            <div className='checkout-form'>
                <form>
                    <p className="heading">Your payment</p>
                    <div className='transfer-input-tab'>
                        <input id="bank-transfer" type="radio" name="transfer" value="bankTransfer" onChange={(e) => setTransfer(e.target.value)} className="transfer-input-item" />
                        <label htmlFor="bank-transfer">Bank Transfer</label>
                        <input id="pay-by-bank" type="radio" name="transfer" value="payByBank" onChange={(e) => setTransfer(e.target.value)} className="transfer-input-item" />
                        <label htmlFor="pay-by-bank">Pay by Bank</label>
                        <input id="credit-card" type="radio" name="transfer" value="creditCard" onChange={(e) => setTransfer(e.target.value)} checked className="transfer-input-item" />
                        <label htmlFor="credit-card">Credit Card</label>
                        <input id="transfer" type="radio" name="transfer" value="ideal" onChange={(e) => setTransfer(e.target.value)} className="transfer-input-item" />
                        <label htmlFor="transfer">IDEAL</label>
                    </div>
                    <div className='credit-card-wrapper'>
                        <div className='form-group'>
                            <label>Card Number</label>
                            <input type="text" name="cardNumber" value={cardNumber} onChange={(e) => seCardNumber(e.target.value)} className="input-field" required/>
                        </div>
                        <div className='form-group'>
                            <label>Expiry Date</label>
                            <input type="text" name="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="input-field" required/>
                        </div>
                        <div className='form-group'>
                            <label>CVV/CCV</label>
                            <input type="text" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} className="input-field" required/>
                        </div>
                        <br />
                        <div className='form-group'>
                            <label>State</label>
                            <select name="state" value={state} className="input-field" onChange={(e) => setState(e.target.value)} required>
                                <option value="">State</option>
                                <option value="1">State 1</option>
                                <option value="2">State 2</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>City</label>
                            <select name="city" value={city} className="input-field" onChange={(e) => setCity(e.target.value)} required>
                                <option value="">City</option>
                                <option value="1">City 1</option>
                                <option value="2">City 2</option>
                            </select>
                        </div>
                    </div>
                    <button className='btn-confirm-payment' onClick={nextStep}>Confirm Payment</button>
                </form>
            </div>

        </div>
    )
}

export default Checkout;