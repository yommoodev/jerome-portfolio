import React from 'react';
import Fleet from '../assets/porfolio/fleet.jpeg'
import Sytec from '../assets/porfolio/sytec.jpeg'
import VueTodo from '../assets/porfolio/vue-yom-todo.jpeg'
import Principia from '../assets/porfolio/principiabio.jpeg'



function Portfolio() {
    return (
        <section id="portfolio" className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
            <h3 className="text-2xl text-[#C1C1C1]">PORTFOLIO</h3>
            <h3 className="text-[56px] font-bold text-white leading-[1]">My Recent Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-[51px]">
                <div className="grid gap-4" >
                    <a href="https://www.fleet.ph" target='_blank' className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" 
                        src={Fleet} alt="" />
                    </a>
                    <a href="https://principiabio.com" target='_blank' className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Principia} alt="" />
                    </a>
                    {/* <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio3} alt="" />
                    </a> */}
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                    <a href="https://sytec.com.ph" target='_blank' className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Sytec} alt="" />
                    </a>
                    {/* <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio5} alt="" />
                    </a>
                    <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio6} alt="" />
                    </a> */}
                </div>
                <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                    <a href="https://vue-todo-yom.netlify.app" target='_blank' className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={VueTodo} alt="" />
                    </a>
                    {/* <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio8} alt="" />
                    </a>
                    <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio9} alt="" />
                    </a> */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;