import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './UserProfile.css'
const UserProfile = () => {
    return (
        <div className='user-profile'>
            <Container>
                <h1 className='well-text'>WELLCOME MD.RAYHAN</h1>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Link className='profile-link' to="order"><i class="fa-solid fa-bag-shopping me-2"></i>    My Orders</Link><br /><br />
                        <Link className='profile-link' to="accountinfo"><i class="fa-solid fa-user"></i>   My Account</Link><br /><br />
                        <Link className='profile-link' to=""><i class="fa-solid fa-circle-question"></i>     FAQs</Link><br /><br />
                        <Link className='profile-link' to=""><i class="fa-solid fa-tag"></i>    Special Offers</Link><br /><br />
                        <Link className='profile-link' to=""><i class="fa-brands fa-square-facebook"></i>    Facebook Page</Link><br /><br />
                        <Link className='profile-link' to=""><i class="fa-solid fa-thumbs-up"></i>    Rate Us</Link><br /><br />
                        <Link className='profile-link' to=""><i class="fa-solid fa-arrow-right-from-bracket"></i>    Log Out</Link><br /><br />
                    </Grid>
                    <Grid item xs={8}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default UserProfile;