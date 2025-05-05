import React from "react";

const Location = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-lime-900 via-lime-200 to-lime-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <span className="text-4xl text-lime-950 font-bold flex items-center justify-center flex-items">
          Our Location
        </span>
        <div className="container px-6 py-12 mx-auto my-auto">
          <div className="overflow-hidden flex flex-item items-center justify-center w-auto rounded-lg lg:col-span-2 h-auto lg:h-auto">
            <iframe
              width="900px"
              height="550px"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.9039504854334!2d77.65209546531462!3d13.039201273666352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f8bc004727%3A0x2c9c0def6304faa9!2sAbhayam%20Men&#39;s%20Home!5e1!3m2!1sen!2sin!4v1725427204105!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
