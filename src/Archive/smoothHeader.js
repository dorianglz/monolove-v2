import React, { useEffect, useState } from "react";
import Monolove from "./assets/LOGOS/New logo/LOGO copie 2.png";

const SmoothHeader = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function convertRange(value, oldMin = 40, oldMax = 100, newMin = 15, newMax = 100) {
    return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
  }

  const translateY = Math.max(100 - (scrollY / window.innerHeight) * 100, 0);

  return (
      <div
      className="fixed size-fit m-8"
      style={{ top: `${translateY > 40 ? translateY - 40 : 0 }%` }}>
        <img
          src={Monolove}
          className="animated-title h-auto object-cover"
          style={{ width: `${translateY > 40 ? convertRange(translateY) : 15 }%` }}
          alt="Fullscreen Background"
        />
      </div>
  );
};

export default SmoothHeader;