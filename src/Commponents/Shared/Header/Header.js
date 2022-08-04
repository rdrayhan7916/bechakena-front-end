
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logov1.png'
import './Header.css'

const Header = () => {

    return (
        <div className='header-part'>
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
                        <Link to="cart" className='cart-link'>
                            <i class="fa-solid fa-cart-shopping cart-icon"></i>
                        </Link>

                        <input value={3} className="cart-inpt" />
                    </span>

                </div>
            </div>
            <div className='header-menu'>
                <a class="nav-link   text-decoration-none px-2  " data-bs-toggle="offcanvas"
                    href="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-bars"></i>
                </a>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
                            lists, etc.
                        </div>
                        <div class="dropdown mt-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
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