import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideImg5 from '../../../img/s5.jpg'
import slideImg6 from '../../../img/s6.jpg'
import slideImg7 from '../../../img/s7.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        id='k'
                        className="d-block w-100 slidImg"
                        src={slideImg5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id='k'
                        className="d-block w-100 slidImg"
                        src={slideImg6}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id='k'
                        className="d-block w-100 slidImg"
                        src={slideImg7}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;