import React, { useEffect, useState } from "react";

const Ads = () => {
  const [visible, setVisible] = useState(true);

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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center pb-3">
      <div className="relative">

        {/* RESPONSIVE CLOSE BUTTON */}
        <button
          onClick={() => setVisible(false)}
          className="
            absolute
            -top-2 -right-2
            bg-red-600 text-white 
            rounded-full shadow-lg z-20

            /* Mobile size */
            w-6 h-6 text-xs flex items-center justify-center

            /* Larger on MD+ screens */
            md:w-7 md:h-7 md:text-sm
          "
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          className="mx-auto md:w-96 w-3/4 rounded-xl shadow-lg"
          src={array[index]}
          alt="ads"
        />
      </div>
    </div>
  );
};

export default Ads;
