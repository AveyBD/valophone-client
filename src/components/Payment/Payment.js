import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const params = useParams();
    const orderId = params.id;
    return (
        <div>
            <p>{orderId}</p>
        </div>
    );
};

export default Payment;