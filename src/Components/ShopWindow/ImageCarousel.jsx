import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
export default function ImageCarousel({ carouselImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [carouselImages.length, currentIndex]);

  return (
    <div className="carousel w-full h-screen  flex items-center justify-center">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full absolute transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mx-auto mt-6">
            <img
              src={image.image}
              className="mx-auto max-w-[100%] h-[80vh]"
              alt={`slide-${index}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
