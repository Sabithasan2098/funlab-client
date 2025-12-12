"use client";
import React, { useState, useEffect, useCallback } from "react";
import "./carousel.css";
import Image from "next/image";

// Define types
interface CarouselProps {
  images: string[];
  autoSlideInterval?: number;
}

// Custom hook for responsive visible slides
const useVisibleSlides = (totalImages: number) => {
  const [visibleSlides, setVisibleSlides] = useState<number>(4);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const calculateVisibleSlides = useCallback((): number => {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      const newVisibleSlides = calculateVisibleSlides();
      setVisibleSlides(newVisibleSlides);

      const maxIndex = Math.max(0, totalImages - newVisibleSlides);
      setCurrentIndex((prev) => Math.min(prev, maxIndex));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateVisibleSlides, totalImages]);

  return { visibleSlides, currentIndex, setCurrentIndex };
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlideInterval = 3000,
}) => {
  const { visibleSlides, currentIndex, setCurrentIndex } = useVisibleSlides(
    images.length
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Drag & Touch states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Auto-Slide
  useEffect(() => {
    if (!isAutoPlaying || images.length <= visibleSlides) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= images.length - visibleSlides ? 0 : prev + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [
    isAutoPlaying,
    images.length,
    visibleSlides,
    autoSlideInterval,
    setCurrentIndex,
  ]);

  // Slide Change Functions
  const nextSlide = (): void => {
    setCurrentIndex((prev) =>
      prev >= images.length - visibleSlides ? 0 : prev + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - visibleSlides : prev - 1
    );
  };

  // ---------------------------
  // 🖱 Mouse Drag functionality
  // ---------------------------
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const diff = startX - e.clientX;

    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsAutoPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsAutoPlaying(true);
  };

  // ---------------------------
  // 📱 Touch Swipe functionality (Mobile Friendly)
  // ---------------------------
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const diff = startX - e.touches[0].clientX;

    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsAutoPlaying(true);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="carousel-track"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <Image
                height={300}
                width={400}
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        {images.length > visibleSlides && (
          <>
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className="carousel-btn carousel-btn-next"
              onClick={nextSlide}
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
