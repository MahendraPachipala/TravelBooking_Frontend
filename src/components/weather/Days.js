import React, { useState, useEffect } from "react";
import partiallyCloudyImage from "../../assets/images/partially-cloudy.png";
import cloudy from "../../assets/images/cloudy.png";
import rain from "../../assets/images/rain.png";

export default function Days({ img, climate, temp, date }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    switch (img) {
      case "partly-cloudy-day":
        setImgSrc(partiallyCloudyImage);
        break;
      case "cloudy":
        setImgSrc(cloudy);
        break;
      case "rain":
        setImgSrc(rain);
        break;
      default:
        setImgSrc(null); // or set to a default image
    }
  }, [img]);

  return (
    <div className="flex flex-col items-center p-2 bg-white rounded-md shadow-sm">
      <img className="w-16 h-16" src={imgSrc} alt={img || "Weather icon"} />
      <p className="text-sm font-semibold">{climate}</p>
      <p className="text-xs">{temp}°C</p>
      <p className="text-xs text-gray-600">{date}</p>
    </div>
  );
}
