import React from "react";
import TextReveal from "./magicui/text-reveal";

const coreValues = [
  { name: "Hope", color: "bg-emerald-500" }, // Emerald Green
  { name: "Family", color: "bg-lime-500" }, // Lime Green
  { name: "Responsibility", color: "bg-emerald-600" }, // Darker Emerald Green
  { name: "Respect", color: "bg-lime-600" }, // Darker Lime Green
  { name: "Integrity", color: "bg-emerald-700" }, // Even Darker Emerald Green
];

const CoreValues = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Core Values</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {coreValues.map((value) => (
          <div
            key={value.name}
            className={`flex items-center justify-center p-6 rounded-lg shadow-lg text-white ${value.color} transform transition-transform hover:scale-105`}
          >
            <p className="text-xl font-semibold">{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
