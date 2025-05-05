import React from "react";

const Blog = () => {
  return (
    <div className="p-8 bg-lime-50">
      <div className="max-w-4xl mx-auto mt-28 bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="/images/img_1.jpg"
          alt="Spiritual"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Spiritual Principles
          </h2>
          <p className="text-emerald-700">
            At Abhayam each individual will come to terms with their identity
            and value based on the fact, that in the eyes of God each one is
            precious and of utmost importance to him.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-8">
        <img
          src="/images/img_2.jpg"
          alt="Homely Atmosphere"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Homely & Friendly Atmosphere
          </h2>
          <p className="text-emerald-700 mb-4">
            A regular routine has been established for the residents at Abhayam
            that covers all areas of nourishment and development for their
            spiritual, physical and emotional well being.
          </p>
          <h3 className="text-xl font-semibold text-emerald-800 mb-2">
            Some of the activities include:
          </h3>
          <ul className="list-disc list-inside text-emerald-700">
            <li>
              Life skills through compulsory guitar classes, Art & Craft works
              along with some cooking.
            </li>
            <li>Vocational training / Job skills.</li>
            <li>Outdoor Sports & Games.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-8">
        <img
          src="/images/img_6.jpg"
          alt="Awareness Programmes"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Awareness Programmes
          </h2>
          <p className="text-emerald-700">
            Abhayam actively takes part in awareness campaigns and programmes.
            We strive towards a drug-free world and work towards it through our
            awareness programmes conducted in schools, colleges, and work
            environments in addition to our in-house residents and addicts in
            need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
