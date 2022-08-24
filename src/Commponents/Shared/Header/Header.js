
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logov1.png'
import './Header.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='header-part sticky-top'>
            <div className='appbar d-flex justify-content-around mt-2'>
                <div>
                    <Link to="/"> <img src={logo} alt='' className='header-logo' /></Link>

                </div>
                <div className='input-div'>
                    <select className="resizing_select">
                        <option>All</option>
                        <option>Gaming</option>
                        <option>Gadgets</option>
                        <option>Kitchen</option>
                        <option>Home</option>
                    </select>
                    <input className='input-tag ms-2 me-2' placeholder='Search Your Favorite Product' type='text' />
                    <button className='src-btn'>  <i class="fa-solid fa-magnifying-glass search-icon"></i></button>
                </div>
                <div className='usre-div'>
                    <Link to="/singin" className='btn-sing me-3'><i class="fa-solid fa-user"></i></Link>
                    <span>
                        <Link to="/cart" className='cart-link'>
                            <i class="fa-solid fa-cart-shopping cart-icon"></i>
                        </Link>

                        <input value={3} className="cart-inpt" />
                    </span>

                </div>
            </div>
            <div className='header-menu'>
                <button className='menu-btn' onClick={handleShow}>
                    <i class="fa-solid fa-bars"></i>
                </button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>



                <Link className='link' to=''>Home</Link>
                <Link className='link' to=''>Featurs</Link>
                <Link className='link' to=''>Pricing</Link>
                <Link className='link' to=''>FQAs</Link>
                <Link className='link' to=''>About</Link>
            </div>
        </div>
    );
};

export default Header;