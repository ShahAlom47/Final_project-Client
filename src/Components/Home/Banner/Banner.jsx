// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slid1 from '../../../assets/home/01.jpg'
import slid2 from '../../../assets/home/02.jpg'
import slid3 from '../../../assets/home/03.png'
import slid4 from '../../../assets/home/04.jpg'
import slid5 from '../../../assets/home/05.png'
import slid6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <div>
            <Carousel centerMode={true} showArrows={true} autoPlay={true} emulateTouch={true} infiniteLoop={true} >
                <div>
                    <img src={slid1} />
                </div>
                <div>
                <img src={slid2} />
                </div>
                <div>
                <img src={slid3} />
                </div>
                <div>
                <img src={slid4} />
                    
                </div>
                <div>
                <img src={slid5} />
                    
                </div>
                <div>
                <img src={slid6} />
                    
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;