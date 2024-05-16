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
            <Carousel className="w-full" centerMode={true} showArrows={true} autoPlay={true} emulateTouch={true} infiniteLoop={true} >
                <div className="w-full" >
                    <img className="w-full" src={slid1} />
                </div>
                <div className="w-full">
                <img className="w-full" src={slid2} />
                </div>
                <div className="w-full">
                <img className="w-full" src={slid3} />
                </div>
                <div className="w-full">
                <img className="w-full" src={slid4} />
                    
                </div>
                <div className="w-full">
                <img className="w-full" src={slid5} />
                    
                </div>
                <div className="w-full">
                <img className="w-full" src={slid6} />
                    
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;