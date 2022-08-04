import React from 'react';
import Category from '../Cetagory/Category';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import ReviewdProducts from '../ReviewdProducts/ReviewdProducts';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Category ></Category>
            <FeaturedProducts></FeaturedProducts>
            <ReviewdProducts></ReviewdProducts>

        </div>
    );
};

export default Home;