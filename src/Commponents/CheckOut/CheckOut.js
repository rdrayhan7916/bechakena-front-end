import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './CheckOut.css'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const CheckOut = () => {
    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false)
    console.log(show)

    useEffect(() => {
        fetch('https://boiling-shelf-71708.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    },
        [])

    const subTotalPrice = products.reduce((total, item) => {
        let price = parseInt(item.price)
        return total + price
    }, 0)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                            <label className="check-lbl">Full Name *</label><br />
                            <input className='check-inpt' {...register("fullName", { required: true })} /><br />
                            <label className="check-lbl">Phone *</label><br />
                            <input className='check-inpt' {...register("phone", { required: true })} /><br />
                            <label className="check-lbl">Email *</label><br />
                            <input className='check-inpt' {...register("email", { required: true })} /><br />

                            <label className="check-lbl">District *</label><br />
                            <select className='check-inpt' {...register("District", { required: true })}>
                                <option value="DHAKA">DHAKA</option>
                                <option value="BHOLA">BHOLA</option>
                                <option value="KHULNA">KHULNA</option>
                            </select><br />
                            <label className="check-lbl">Address *</label><br />
                            <input className='check-inpt' {...register("address", { required: true })} /><br />
                            <input type="submit" />
                        </form>
                        <span>
                            <button className='shipping-address' onClick={() => { setShow(!show) }}>

                                <label for="c__" > <i class="fa-solid fa-location-dot"></i> SHIPPING ADDRESS </label>
                            </button>

                        </span>

                        {show && <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                            <label className="check-lbl">Full Name *</label><br />
                            <input className='check-inpt' {...register("fullName", { required: true })} /><br />
                            <label className="check-lbl">Phone *</label><br />
                            <input className='check-inpt' {...register("phone", { required: true })} /><br />
                            <label className="check-lbl">Email *</label><br />
                            <input className='check-inpt' {...register("email", { required: true })} /><br />

                            <label className="check-lbl">District *</label><br />
                            <select className='check-inpt' {...register("District", { required: true })}>
                                <option value="DHAKA">DHAKA</option>
                                <option value="BHOLA">BHOLA</option>
                                <option value="KHULNA">KHULNA</option>
                            </select><br />
                            <label className="check-lbl">Address *</label><br />
                            <input className='check-inpt' {...register("address", { required: true })} /><br />
                            <input type="submit" />
                        </form>}

                    </Grid>
                    <Grid item xs={4} className="">


                        <Card className='card'>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h5>Order Summary</h5>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className=' d-flex justify-content-between'>
                                        <h6>Subtotal ({products.length})</h6>
                                        <h6>৳ {subTotalPrice}</h6>
                                    </span>

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className=' d-flex justify-content-between'>
                                        <h6>Shipping Fee</h6>
                                        <h6 >৳ 175</h6>
                                    </span>

                                </Typography>
                            </CardContent>
                            <span className=' d-flex justify-content-between'>
                                <input className='cupon-inpt' placeholder='Enter Voucher Code' />
                                <button className='cpn-btn'>Apply</button>
                            </span>

                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    <span className=' d-flex justify-content-between'>
                                        <h6>Total</h6>
                                        <h6 className='total-price'>৳ 175</h6>
                                    </span>

                                </Typography>
                            </CardContent>
                        </Card>
                        <button className='to-checkout-btn'>
                            <Link className='check-link' to="/checkout" >PROCEED TO PAY</Link>
                        </button>

                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;