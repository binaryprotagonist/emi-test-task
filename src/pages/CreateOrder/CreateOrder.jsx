import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createEmi } from 'store/action/emiAction';
import { setOrder } from 'store/action/orderAction';
import './CreateOrder.scss';

const CreateOrder = () => {
  const [amount, setAmount] = useState('');
  const [totalEmi, setTotalEmi] = useState('3');
  const [inputErrors, setInputErrors] = useState({ amount: '', totalEmi: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetErrors = () => {
    setInputErrors({});
  };

  const submitForm = (e) => {
    e.preventDefault();
    resetErrors();
    if (!amount) {
      setInputErrors({ ...inputErrors, amount: 'Please enter amount' });
    }


    if (!totalEmi) {
      setInputErrors({ ...inputErrors, totalEmi: 'Please select emi number' });
    }

    if (parseInt(amount) < 1 ) {
      setInputErrors({ ...inputErrors, amount: 'Please amount greater then 0' });
    }

    if (parseInt(amount) > 0 && amount && totalEmi) {
      const parseEmi = parseInt(amount) / totalEmi;
      const emis = [];
      for (let i = 1; i <= totalEmi; i++) {
        const invoiceNumber = Math.floor(100000 + Math.random() * 900000);
        const poNumber = Math.floor(100000 + Math.random() * 900000);
        emis.push({
          id: i,
          isPaid: false,
          date: null,
          amount: parseEmi.toFixed(2),
          invoiceNumber: invoiceNumber,
          poNumber: poNumber,
        });
      }
      dispatch(createEmi(emis));
      dispatch(
        setOrder({
          orderId: Math.floor(100000 + Math.random() * 900000),
          amount: amount,
          isEmi: true,
          totalEmi: parseInt(totalEmi),
        })
      );
      navigate('/payment-term');
    }
  };

  return (
    <div className="order-form">
      <form>
        <p className="form-title">Create Your Emi's</p>
        <div className="input-group">
          <label>Amount</label>
          <input
            type="number"
            className="input-field"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <p className="text-error">{inputErrors?.amount}</p>
        </div>
        <div className="input-group">
          <label>Total Emi's</label>
          <select
            name="createEmi"
            className="input-field"
            onChange={(e) => setTotalEmi(e.target.value)}
            value={totalEmi}
          >
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
          <p className="text-error">{inputErrors?.totalEmi}</p>
        </div>
        <button onClick={submitForm} className="btn-continue">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;
