"use client"
import React, { useEffect, useState } from 'react';
const movies = [
    // Add your movie data here
    // Each movie should have a title and an image URL
    { title: 'Movie 1', image: 'image-1.webp', description: 'aaa aaaaaa aaaaaaa' },
    { title: 'Movie 2', image: 'image-2.webp', description: 'bbbbbbb bbbbb bbbbbb' },
    { title: 'Movie 3', image: 'image-3.webp', description: 'cc ccccccc cccccc ccc' },
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
            <div >
                <div
                    className="flex transition-transform transform"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"

                        >
                            <div className="bg-gray-200 h-full p-4 m-2 rounded-lg">
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full max-h-64"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {
                        movies[currentIndex].description
                    }
                </div>

            </div>
        </>
    );
};

export default Slider;