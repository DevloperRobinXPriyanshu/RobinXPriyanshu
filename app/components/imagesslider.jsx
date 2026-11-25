"use client"; // Agar Next.js App Router use kar rahe hain toh yeh zaroori hai

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Ya koi bhi icon library

const slides = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGyJoheGiEbMPrWSVivRNMo60xnDN_C8fF51CV9eN6g&s=10",
    title: "Welcome to Our Campus",
    subtitle: "Empowering students with modern education and strong values.",
    ctaText: "Explore Admissions",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    title: "Smart Classrooms & Labs",
    subtitle: "Hands-on learning experience with state-of-the-art facilities.",
    ctaText: "View Facilities",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80",
    title: "Sports & Extracurriculars",
    subtitle: "Holistic development beyond textbooks.",
    ctaText: "Join Us Today",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Agli slide par jaane ke liye
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Pichli slide par jaane ke liye
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide har 4 second mein
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // Cleanup jab component unmount ho
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden group">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Dark Overlay taaki text saaf dikhe */}
            <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-gray-200 mb-6 max-w-xl">
                {slide.subtitle}
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                {slide.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:flex items-center justify-center absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:flex items-center justify-center absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-purple-500" : "w-3 bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}