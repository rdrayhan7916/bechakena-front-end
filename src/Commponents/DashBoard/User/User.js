import { Link } from 'react-router-dom';
import React from 'react';

const User = () => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rayhan</td>
                        <td>rdrayhan7916@gmail.com</td>
                        <td> <Link to=''> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default User;