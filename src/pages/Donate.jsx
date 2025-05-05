import { Navbar } from "@/components";
import React from "react";

const Donate = () => {
  return (
    <div className="absolute inset-0 -z-10 py-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <Navbar />
      <div className="flex items-center justify-center h-screen px-4">
        <img
          src="src/assets/donate.jpg"
          alt="donate"
          className="max-h-full max-w-full sm:max-h-[80%] sm:max-w-[80%]"
        />
      </div>
    </div>
  );
};

export default Donate;
