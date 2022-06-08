import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import car1 from '../img/img_1.jpg';
import car2 from '../img/img_2.jpg';
import car3 from '../img/img_3.jpg';
import car4 from '../img/img_4.jpg';

export class Intro extends Component {
    render() {
        return (
            <div className='relative'>
                <div className='relative bg-[#2C2B2A] md:bg-inherit md:absolute z-10 text-white p-8 bottom-0 left-0 md:max-w-lg'>
                    <div className='text-5xl md:text-7xl' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        DANCE CLUB VIT
                    </div>
                    <div className='py-4' style={{ "fontFamily": "Montserrat" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum itaque voluptas ad voluptate quos, qui incidunt porro corporis quo placeat eum doloremque amet atque illum maiores laboriosam labore sapiente saepe repellendus ex minima nostrum. Magnam cumque vitae enim vel?
                    </div>
                    <button className="p-2 px-8 bg-[#FF620E]" style={{ "fontFamily": "Montserrat" }}>
                        KNOW MORE
                    </button>
                </div>
                <Carousel className='carousel' useKeyboardArrows autoPlay dynamicHeight emulateTouch infiniteLoop showStatus={false} showArrows={false} showThumbs={false}>
                    <div>
                        <img src={car1} alt="Dance 1" />
                    </div>
                    <div>
                        <img src={car2} alt="Dance 2" />
                    </div>
                    <div>
                        <img src={car3} alt="Dance 3" />
                    </div>
                    <div>
                        <img src={car4} alt="Dance 4" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Intro