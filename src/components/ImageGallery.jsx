import React from "react";

const images = [
  "/images/img_1.jpg",
  "/images/img_2.jpg",
  "/images/img_3.jpg",
  "/images/img_4.jpg",
  "/images/img_5.jpg",
  "/images/img_6.jpg",
];

const ImageGallery = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto mt-40">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Our Facility Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
