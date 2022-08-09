import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import './Cart.css'
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {
                            products.map((product) => (
                                <Grid container className='item' key={product.title}>
                                    <Grid item xs={2}>
                                        <img
                                            src={product.img}
                                            alt=""
                                            className='cart-item-img'
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <h5>{product.title}</h5>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <h3 >$ {product.price}</h3>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <button onClick={() => decrement()} className='ms-5 me-2 qnt-btn'>-</button>
                                        <input className='qnt-inpt' value={quantity} />
                                        <button onClick={() => increment()} className='ms-2 qnt-btn'>+</button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <button className='item-dlt-btn'>
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </Grid>
                                </Grid>
                            ))
                        }


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
                                        <h6 >৳ 50</h6>
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
                                        <h6 className='total-price'>৳ {Total}</h6>
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
        </div>
    );
};

export default Cart;