import React, { useEffect, useState } from "react";

const Ads = () => {
  const array = [
    "https://res.cloudinary.com/delx0bz9t/image/upload/v1764264327/WhatsApp_Image_2025-11-27_at_10.16.16_PM_1_htatte.jpg",
    "https://res.cloudinary.com/delx0bz9t/image/upload/v1764264326/WhatsApp_Image_2025-11-27_at_10.16.16_PM_y8wa9p.jpg",
    "https://res.cloudinary.com/delx0bz9t/image/upload/v1764264326/WhatsApp_Image_2025-11-27_at_10.16.17_PM_xhkn3v.jpg",
    "https://res.cloudinary.com/delx0bz9t/image/upload/v1764264326/WhatsApp_Image_2025-11-27_at_10.16.16_PM_2_adi7i2.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % array.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <img
        className="mx-auto md:w-96 w-2/3  md:h-20 rounded-xl"
        src={array[index]}
        alt="ad"
      />
    </div>
  );
};

export default Ads;
