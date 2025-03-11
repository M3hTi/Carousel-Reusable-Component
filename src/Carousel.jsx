import { PropTypes } from "prop-types";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
  dotIcon: PropTypes.node,
  activeDotIcon: PropTypes.node,
};

function Carousel({
  className = "",
  items,
  dotIcon = <GoDot />,
  activeDotIcon = <GoDotFill />,
}) {
  const stylePreBtn = {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "2rem",
    color: "white",
    cursor: "pointer",
    zIndex: 10,
  };
  const styleNextBtn = {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "2rem",
    color: "white",
    cursor: "pointer",
    zIndex: 10,
  };

  const dotsContainerStyle = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 10,
  };

  const dotStyle = {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "white",
    opacity: 0.7,
    transition: "all 0.2s ease",
  };

  const activeDotStyle = {
    ...dotStyle,
    opacity: 1,
    transform: "scale(1.2)",
  };

  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    } else {
      setStep(items.length);
    }
  }

  function handleNextBtn() {
    if (step < items.length) {
      setStep((s) => s + 1);
    } else {
      setStep(1);
    }
  }

  function handleDotClick(i) {
    setStep(i);
  }

  return (
    <div className={`carouselContainer ${className}`}>
      <button style={stylePreBtn} onClick={handlePrevious}>
        <GrPrevious />
      </button>
      <Item item={items[step - 1]} />
      <button style={styleNextBtn} onClick={handleNextBtn}>
        <GrNext />
      </button>
      <div style={dotsContainerStyle}>
        {Array.from({ length: items.length }, (_, i) => (
          <span
            role="button"
            key={i}
            style={i === step - 1 ? activeDotStyle : dotStyle}
            onClick={() => handleDotClick(i + 1)}
          >
            {i === step - 1 ? activeDotIcon : dotIcon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

function Item({ item }) {
  const { name, imageUrl } = item;

  const itemStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const captionStyle = {
    position: "absolute",
    bottom: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1.2rem",
    zIndex: 5,
  };

  return (
    <div className="item" style={itemStyle}>
      <img src={imageUrl} alt={name} style={imageStyle} />
      <div style={captionStyle}>{name}</div>
    </div>
  );
}