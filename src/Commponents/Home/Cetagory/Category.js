import { Grid, CardMedia, CardContent, Typography, Card, CardActions, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import c1 from '../../../img/c1.webp'
import c2 from '../../../img/c2.jpg'
import c3 from '../../../img/c3.webp'
import c4 from '../../../img/c4.jpg'
import './Category.css'
const Category = () => {
    return (
        <div className='category'>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming accessories
                            </Typography>
                        </CardContent>
                        <Link to="/gamingproducts">
                            <CardMedia
                                component="img"
                                height="250"
                                image={c1}
                                alt="green iguana"
                            />
                        </Link>


                        <CardActions className='mt-5 t-center ms-5'>

                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item md={3} xs={12}>

                    <Card sx={{ maxWidth: 345 }}>
                        <Link to="/gadgetsproducts">
                            <CardMedia
                                component="img"
                                height="250"
                                image={c2}
                                alt="green iguana"
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gadgets
                            </Typography>
                        </CardContent>

                        <CardActions className='mt-5 t-center ms-5'>

                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item md={3} xs={12}>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Kitchen appliance
                            </Typography>
                        </CardContent>
                        <Link to="/kitchenproducts">
                            <CardMedia
                                component="img"
                                height="250"
                                image={c3}
                                alt="green iguana"
                            />
                        </Link>
                        <CardActions className='mt-5 t-center ms-5'>

                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item md={3} xs={12}>

                    <Card sx={{ maxWidth: 345 }}>
                        <Link to="/homeproducts">
                            <CardMedia
                                component="img"
                                height="250"
                                image={c4}
                                alt="green iguana"
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home appliance
                            </Typography>
                        </CardContent>
                        <CardActions className='mt-5 t-center ms-5'>

                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                </Grid>


            </Grid>
        </div>
    );
};

export default Category;