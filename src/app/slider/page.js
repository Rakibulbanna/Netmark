"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const movies = [
    // Add your movie data here
    // Each movie should have a title and an image URL
    { title: 'Movie 1', image: 'image-1.webp', description: 'aaa aaaaaa aaaaaaa' },
    { title: 'Movie 2', image: 'image-2.webp', description: 'bbbbbbb bbbbb bbbbbb' },
    { title: 'Movie 3', image: 'image-3.webp', description: 'cc ccccccc cccccc ccc' },
    { title: 'Movie 3', image: 'image-4.webp', description: 'cc 444cc ccc' },
    { title: 'Movie 3', image: 'image-5.webp', description: 'cc55555cccccc ccc' },
    { title: 'Movie 3', image: 'image-6.webp', description: 'cc 66666cccccc ccc' },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            {/* <div >
                <div className='grid grid-cols-3' >
                    <div className=" flex transition-transform transform"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}>
                        {movies.map((movie, index) => (
                            <div
                                key={index}
                                className=" w-full border-4 border-indigo-500/100  flex-shrink-0 "

                            >


                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full max-h-64"
                                />



                            </div>
                        ))}
                    </div>


                </div>


                <h3> {movies[currentIndex].description}</h3>

            </div> */}
            <div className="container">
                <h1 className="heading">Flower Gallery</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide>
                            <img src={movie.image} alt={movie.title} />
                        </SwiperSlide>
                    ))}

                    {/* <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div> */}
                </Swiper>
            </div>
        </>
    );
};

export default Slider;