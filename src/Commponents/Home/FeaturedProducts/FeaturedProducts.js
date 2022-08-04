import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './FeaturedProducts.css'
import f1 from '../../../img/p1.jpg'
import f2 from '../../../img/p2.jpg'
import f3 from '../../../img/p3.jpg'
import f4 from '../../../img/p4.jpg'
import f5 from '../../../img/p5.jpg'
import f6 from '../../../img/p6.jpg'
import f7 from '../../../img/p7.jpg'
const FeaturedProducts = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className='featrued-part'>
            <h1 className='mb-4'>Featured Products</h1>
            <Slider className='mt-5 ms-5' {...settings}>
                <div>
                    <img
                        src={f1}
                        alt=''
                        className='f-img'
                    />
                    <h3>1</h3>
                </div>
                <div>
                    <img
                        src={f2}
                        alt=''
                        className='f-img'
                    />
                    <h3>2</h3>
                </div>
                <div>
                    <img
                        src={f3}
                        alt=''
                        className='f-img'
                    />
                    <h3>3</h3>
                </div>
                <div>
                    <img
                        src={f4}
                        alt=''
                        className='f-img'
                    />
                    <h3>4</h3>
                </div>
                <div>
                    <img
                        src={f5}
                        alt=''
                        className='f-img'
                    />
                    <h3>5</h3>
                </div>
                <div>
                    <img
                        src={f6}
                        alt=''
                        className='f-img'
                    />
                    <h3>6</h3>
                </div>
                <div>
                    <img
                        src={f7}
                        alt=''
                        className='f-img'
                    />
                    <h3>7</h3>
                </div>
            </Slider>
        </div>
    );
};

export default FeaturedProducts;