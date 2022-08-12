import { Route, Routes } from 'react-router-dom';
import PaymentTerm from 'pages/PaymentTerm/PaymentTerm';
import PaymentSuccess from 'pages/PaymentSuccess/TransactionSuccess';
import Checkout from 'pages/Checkout/Checkout';
import CreateOrder from 'pages/CreateOrder/CreateOrder';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateOrder />} />
      <Route path="/payment-term" element={<PaymentTerm />} />
      <Route path="/checkout/:emi" element={<Checkout />} />
      <Route path="/transaction-success/:emi" element={<PaymentSuccess />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default routes;
