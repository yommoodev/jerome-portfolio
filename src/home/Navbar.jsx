import React from 'react';

function Navbar() {
    return (
        <nav className="top-0 z-20 w-full px-[24px] xl:px-0">
            <div className="flex flex-wrap items-center justify-between max-w-[1160px] w-full py-7 mx-auto">
                <div className="lg:text-[28px] text-2xl font-black text-neutral-300">Jerome Canolang</div>
                <div className="items-center justify-between hidden w-full gap-16 md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col items-center w-[90%] justify-center gap-4 md:gap-[30px] p-4 mt-4 font-medium absolute md:left-3/4 md:-translate-x-[54%]  z-20 bg-[#141414]/[20%] md:bg-transparent border backdrop-blur-2xl md:backdrop-blur-0 border-[#222222] md:bg-transparent rounded-lg md:p-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li className="text-center">
                            <a href="#home" className="block text-center text-white rounded md:bg-transparent">Home</a>
                        </li>
                        <li className="text-center">
                            <a href="#services" className="block text-center text-white rounded md:bg-transparent">Services</a>
                        </li>
                        <li className="text-center">
                            <a href="#portfolio" className="block text-center text-white rounded md:bg-transparent">Portfolio</a>
                        </li>
                        <li className="text-center">
                            <a href="#contact" className="block text-center text-white rounded md:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;