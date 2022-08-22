import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const VendorDashboard = () => {
    return (
        <div className='row ad'>
            <div className='dashboard-top'></div>
            <div className='col-3 addminRoute'>
                <nav className="nav flex-column">
                    <Link to="productlist" className='ne-link'>Product List</Link>
                    <Link to="orderlist" className='ne-link'>Order List</Link>
                    <Link to="user" className='ne-link'>Delivered </Link>
                </nav>
            </div>
            <div className='col-9'>
                <Outlet />
            </div>
        </div>
    );
};

export default VendorDashboard;