"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function SlideBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://media.cnn.com/api/v1/images/stellar/prod/everlane-everyone-jean.jpg?c=16x9",
            title: "Made to Last",
            description: "We're serving American classics—remixed.",
        },
        {
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_30/3399189/everlane-sale-kr-2x1-tease-200723.jpg",
            title: "Made to Last",
            description: "We're serving American classics—remixed.",
        },
        {
            image: "https://media.cntraveler.com/photos/65c3af2e7439810c36f5d2ff/master/pass/Everlane-2024_00-ID-lede.jpg",
            title: "Made to Last",
            description: "We're serving American classics—remixed.",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (
        <div className="relative w-full h-[700px] overflow-hidden shadow-lg">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className="w-full flex-shrink-0 relative" key={index}>
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50">
                            <h2 className="text-5xl font-semibold mb-5 flex-col items-right justify-right">{slide.title}</h2>
                            <h4 className="text-xl font-semibold mb-6 flex-col items-right justify-right">{slide.description}</h4>
                            <Link href={"/products"} className="bg-black px-9 py-2 text-white rounded hover:bg-opacity-80 transition">
                                BUY NOW
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-r hover:bg-opacity-75"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-l hover:bg-opacity-75"
            >
                &#10095;
            </button>
        </div>
    )
}