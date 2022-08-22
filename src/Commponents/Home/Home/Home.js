import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Category from '../Cetagory/Category';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import ReviewdProducts from '../ReviewdProducts/ReviewdProducts';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Category ></Category>
            <FeaturedProducts></FeaturedProducts>
            <ReviewdProducts></ReviewdProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;