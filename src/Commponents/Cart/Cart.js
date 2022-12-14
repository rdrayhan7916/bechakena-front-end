import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import './Cart.css'
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Cart = () => {
    const [quantity, setQuantity] = useState(1)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://boiling-shelf-71708.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    },
        [])
    const increment = () => {
        setQuantity(quantity + 1)
    }
    const decrement = () => {
        setQuantity(quantity - 1)
    }

    const subTotalPrice = products.reduce((total, item) => {
        let price = parseInt(item.price)
        return total + price
    }, 0)
    const totalPrice = () => {
        return subTotalPrice + 50
    }
    const Total = totalPrice()
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        {
                            products.map((product) => (
                                <Grid container className='item' key={product.title}>
                                    <Grid item md={2} xs={6}>
                                        <img
                                            src={product.img}
                                            alt=""
                                            className='cart-item-img'
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={3}>
                                        <h5 className='cart-item-title'>{product.title}</h5>
                                    </Grid>
                                    <Grid item md={2} xs={3}>
                                        <h3 >$ {product.price}</h3>
                                    </Grid>
                                    <Grid item md={3} xs={6}>
                                        <button onClick={() => decrement()} className='ms-5 me-2 qnt-btn'>-</button>
                                        <input className='qnt-inpt' value={quantity} />
                                        <button onClick={() => increment()} className='ms-2 qnt-btn'>+</button>
                                    </Grid>
                                    <Grid item md={2} xs={6}>
                                        <button className='item-dlt-btn'>
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </Grid>
                                </Grid>
                            ))
                        }


                    </Grid>
                    <Grid item md={4} xs={12} className="">


                        <Card className='card'>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h5>Order Summary</h5>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className=' d-flex justify-content-between'>
                                        <h6>Subtotal ({products.length})</h6>
                                        <h6>??? {subTotalPrice}</h6>
                                    </span>

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className=' d-flex justify-content-between'>
                                        <h6>Shipping Fee</h6>
                                        <h6 >??? 50</h6>
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
                                        <h6 className='total-price'>??? {Total}</h6>
                                    </span>

                                </Typography>
                            </CardContent>
                        </Card>
                        <button className='to-checkout-btn'>
                            <Link className='check-link' to="/checkout" >PROCEED TO CHECKOUT</Link>
                        </button>

                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Cart;