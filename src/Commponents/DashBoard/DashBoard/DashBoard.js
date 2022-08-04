import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div className='row ad'>
            <div className='col-3 addminRoute'>
                <nav className="nav flex-column">
                    <Link to="user" className='ne-link'> User</Link>
                    <Link to="vendor" className='ne-link'>Vendor</Link>
                    <Link to="order" className='ne-link'> Order</Link>
                    <Link to="product" className='ne-link'> Product</Link>
                </nav>
            </div>
            <div className='col-9'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;