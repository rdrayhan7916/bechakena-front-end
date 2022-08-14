import React from 'react';
import './OrderList.css'
const OrderList = () => {
    return (
        <div className='table-responsive'>
            <table class="table order-table">
                <thead>
                    <tr>
                        <th scope="col"> Code</th>
                        <th scope="col"> Name</th>
                        <th scope="col"> Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>4</td>
                        <td>16 Aug </td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td>
                            <button type="button" className="btn btn-primary">
                                <i class="fa-solid fa-circle-check"></i>
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default OrderList;