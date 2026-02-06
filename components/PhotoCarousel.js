'use client';

import { useState } from 'react';

export default function PhotoCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Get current image and next image for display
  const currentImage = images[currentIndex];
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImage = images[nextIndex];

  return (
    <div className="carousel-container">
      <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious} aria-label="Previous">
        &#8249;
      </button>

      <div className="carousel-images">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="award-image"
        />
        <img
          src={nextImage.src}
          alt={nextImage.alt}
          className="award-image"
        />
      </div>

      <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next">
        &#8250;
      </button>
    </div>
  );
}
