import React, { useEffect, useState } from 'react';
import { Grid, CardMedia, CardContent, Typography, Card, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './GadgetsAllProducts.css'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const GadgetsAllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://boiling-shelf-71708.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    },
        [])
    const navigate = useNavigate()
    const navigateSingleProduct = id => {
        navigate(`/singleproduct/${id}`)
    }
    return (
        <div>
            <Header></Header>
            <h1>Gadgets all products page</h1>
            <Grid container spacing={2}>
                <Grid item md={2}>

                    <div className='brand-part'>
                        <p>Brand</p>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                        <div>
                            <button className='ck-btn'>
                                <input type="checkbox" className='me-2' id='apex' />
                                <label for="apex">Apex</label>
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item md={10} className="mt-5">


                    <Grid container spacing={3}>
                        {
                            products.map((product) => (


                                <Grid md={4} spacing={2}>
                                    <button onClick={() => navigateSingleProduct(product._id)} className='product-card'>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={product.img}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {product.title}
                                                </Typography>
                                                <span className='rating'>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star-half-stroke"></i>
                                                </span>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    $ {product.price}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </button>

                                </Grid>

                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
};

export default GadgetsAllProducts;