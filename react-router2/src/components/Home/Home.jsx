import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold sm:text-5xl mb-8">
                        LAPLIFE
                        <br />
                        Energising your laptop
                    </h2>
                </div>

                <Slider {...settings} className="absolute inset-0 w-full h-full flex justify-center items-center">
                    <div>
                        <img className="w-96 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Fn4tU8EwVOb_k7wd12VTAHtQi5m7XEKQOg&s" alt="Laptop Repair" />
                    </div>
                    <div>
                        <img className="w-96 mx-auto" src="https://sc04.alicdn.com/kf/H2f0adfcac4714ff3852605421ebcbc81y.jpg" alt="Laptop Repair Service" />
                    </div>
                    <div>
                        <img className="w-96 mx-auto" src="https://5.imimg.com/data5/SELLER/Default/2022/8/KK/QX/SH/9128062/laptop-component.jpg" alt="Another Service" />
                    </div>
                </Slider>
            </aside>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Your Trusted Laptop Repair Service
            </h1>
        </div>
    );
}
