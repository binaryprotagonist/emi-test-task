import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.scss';
import { Emi } from 'models/emiModel';

const Transaction = () => {

    const emis = useSelector((state: any) => state.emi);
    const order = useSelector((state: any) => state.order);
    const [selectedEmi, setSelectedEmi] = useState<any>(null);

    useEffect(() => {
        const emi = emis.find((emi: Emi) => emi.isPaid === false);
        if (emi === undefined) {
            const emi = emis.reverse().find((emi: Emi) => emi.isPaid === true);
            setSelectedEmi(emi);
        } else {
            setSelectedEmi(emi);
        }
    }, [emis])

    return (
        <div className='transaction'>
            {order.orderId ?
                <>
                    <p>Transaction summary</p>
                    <p>Amount <span>€{selectedEmi?.amount} <button className="invoice-status-badge">Open</button></span></p>
                    <p>Recipient<span>Corp.co</span></p>
                    <p>Invoice number<span>{selectedEmi?.invoiceNumber}</span></p>
                    <p>PO number<span>{selectedEmi?.poNumber}</span></p>
                    <button className="btn-invoice-download">Download invoice</button>
                    <p className="dispute-transaction-text">Do you dispute this transaction?</p>
                    <button className='btn-dispute'>Open a dispute</button>
                </> : ''
            }
        </div>
    );
}

export default Transaction