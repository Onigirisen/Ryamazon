import { useState } from "react";

const HomeCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [slides, setSlides] = useState(props.slides || []);
  const prevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(slides.length - 1);
    }
    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + props.imageWidth);
  };

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue - props.imageWidth);
  };

  return (
    <div className="HomeCarousel">
      <div
        className="slides"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: "transform ease-out 0.45s",
        }}
      >
        {slides.map((slide, i) => (
          <img key={i} className="slide" src={slide} alt="" />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default HomeCarousel;
