import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} >
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                        </Grid>
                        <Grid item xs={4}>
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                        </Grid>
                        <Grid item xs={4}>
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                            <Link className='f-link' to=""> Home</Link><br />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} className="sub-part">
                    <h4>Subscribe to our newsletter</h4>
                    <h6 className='mt-3'>Monthly digest of whats new and exciting from us.</h6>
                    <input className='sub-inpt' placeholder='Email address' />
                    <button className='sub-btn'>Subscribe</button>
                </Grid>
            </Grid>
            <hr className='hr' />
            <p className='f-text'>© 2022 Developed by CODETREE</p>
        </div>
    );
};

export default Footer;