import { Alert } from '@mui/material';
import React from 'react';
import './UserOrders.css'
import { Link } from 'react-router-dom'

const UserOrders = () => {
    return (
        <div>
            <Alert severity="info">No Orders Yet</Alert>
            <Link className='timeline-link' to="timeline">
                <div className='mt-5 orderd-item'>
                    <div className="d-flex justify-content-between">
                        <p>House 10 Road 12 Sector-9, Uttara, Dhaka City, Dhaka</p>
                        <p>Regular Delivary <i class="fa-solid fa-location-dot"></i></p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Order Id</p>
                        <p>#652555555555 </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Date</p>
                        <p>Aug 8, 2022, 04:40 PM</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Status</p>
                        <p>prosessing</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Ammount Payable</p>
                        <p>৳ 15</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default UserOrders;