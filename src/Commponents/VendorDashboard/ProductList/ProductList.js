import React from 'react';
import { Link } from 'react-router-dom';

import "./ProductList.css"
const ProductList = () => {

    return (
        <div>

            <h2>Product List </h2>
            <div className='add-product-btn-div'><Link to="addproduct" className='add-product-btn'> Add New Product</Link></div>

            <div className='table-responsive'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Rayhan</td>
                            <td>3784</td>
                            <td>4</td>
                            <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                                <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;