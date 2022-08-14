import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useNavigate, useParams } from 'react-router-dom';
// import ModalVideo from 'react-modal-video'

import './SingleProduct.css'

const SingleProduct = () => {

    const [products, setProducts] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(1)



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
    const navigate = useNavigate()
    const navigateSingleProduct = id => {
        navigate(`/singleproduct/${id}`)
    }
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setItem(data.meals[0]))
    },
        [])
    const [item, setItem] = useState([])
    const [zoomImg, setZoomImg] = useState(`${item.strMealThumb}`)
    console.log(`${item.strMealThumb}`)

    const changeImg = (imgSrc = `${item.strMealThumb}`) => {
        const mainImg = document.getElementsByClassName("main-img")
        mainImg[0].children[0].src = imgSrc
        setZoomImg(imgSrc)
    }
    return (
        <Container>


            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={6}>


                            <ReactImageMagnify
                                className='main-img' {...{
                                    smallImage: {

                                        alt: 'Product Img',
                                        isFluidWidth: true,
                                        src: `${item.strMealThumb}`


                                    },
                                    largeImage: {
                                        src: zoomImg,
                                        width: 1000,
                                        height: 1500
                                    }
                                }} />

                            {/* <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrO0yvbCGSLwtlUp5AcvxXoFbQqPuzfYzGoQ&usqp=CAU'
                                alt=''
                                className='main-img'
                            /> */}

                            <div className='under-img'>

                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEcqnnCz9EUaMA3cNjQVoivKeN_znjNanMA&usqp=CAU'
                                    alt=''
                                    className='un-img'
                                    onClick={() => (changeImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEcqnnCz9EUaMA3cNjQVoivKeN_znjNanMA&usqp=CAU"))}
                                />

                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNkICMpIhE08rDgHgaB80AVc5mTXkoywhSQ&usqp=CAU'
                                    alt=''
                                    className='un-img'
                                    onClick={() => (changeImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNkICMpIhE08rDgHgaB80AVc5mTXkoywhSQ&usqp=CAU"))}
                                />

                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2S3Kl8PBV_DuaNbQcIy-v1Kd7lgR9ZuGiA&usqp=CAU'
                                    alt=''
                                    className='un-img'
                                    onClick={() => (changeImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2S3Kl8PBV_DuaNbQcIy-v1Kd7lgR9ZuGiA&usqp=CAU"))}
                                />

                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZr0MyctfJU5ivkjHowytJhdoYQiMxE6MEw&usqp=CAU'
                                    alt=''
                                    className='un-img'
                                    onClick={() => (changeImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZr0MyctfJU5ivkjHowytJhdoYQiMxE6MEw&usqp=CAU"))}
                                />
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}

                                <button className="video-btn" onClick={() => setOpen(true)}>

                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQeTDGAbZbV41ZNXZ2kAWVvSWRMx164YQZQ&usqp=CAU'
                                        alt=''
                                        className='un-img'
                                    />
                                </button>
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            <CardContent className='content'>
                                <Typography gutterBottom variant="h6" component="div">
                                    Fiodio Rainbow Membrane Gaming Keyboard, Quiet Wired Computer Keyboard, 104 Silent Keys, 26 Anti-Ghosting Keys, Spill Resistant, Multimedia Control for PC and Desktop
                                </Typography>
                                <span className='rating'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </span>
                                <Typography gutterBottom variant="h5" component="div">
                                    $ 40
                                </Typography>
                                <span className='under-img'>
                                    <p>Color Family  Sky</p>
                                    <div>
                                        <img
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZr0MyctfJU5ivkjHowytJhdoYQiMxE6MEw&usqp=CAU'
                                            alt=''
                                            className='color-img'
                                            onClick={() => (changeImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZr0MyctfJU5ivkjHowytJhdoYQiMxE6MEw&usqp=CAU"))}
                                        />
                                    </div>

                                </span>

                                <p>Size
                                    <button className='ms-5 me-2 size'>M</button>
                                    <button className='me-2 size'>L</button>
                                    <button className='me-2 size'>XL</button>
                                    <button className='me-2 size'>XXL</button>
                                </p>
                                <p>Quantity

                                    <button onClick={() => decrement()} className='ms-5 me-2 qnt-btn'>-</button>
                                    <input className='qnt-inpt' value={quantity} />
                                    <button onClick={() => increment()} className='ms-2 qnt-btn'>+</button>
                                </p>
                                <button className='buy-btn'>Buy Now</button>
                                <button className='to-cart-btn'>Add To Cart</button>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>

                <Grid item md={12} className="mt-5">

                    <h1 className='mb-5'> Products related to this item</h1>
                    <Grid container spacing={3}>
                        {
                            products.map((product) => (


                                <Grid md={4} spacing={2} key={product._id}>
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
        </Container>
    );
};

export default SingleProduct;