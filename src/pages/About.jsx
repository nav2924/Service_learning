import React from "react";
import { CoreValues, Navbar, Team, Footer , ImageGallery} from "../components/index";
import DotPattern from "../components/magicui/dot-pattern";
import { cn } from "../lib/utils";
import HeroVideoDialog from "../components/magicui/herovideodialog";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Navbar />
      <main className="flex-grow mt-28">
        <div
          className={cn(
            "relative p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-4xl mx-auto sm:h-[500px] md:h-[600px]"
          )}
        >
          <DotPattern
            width={20}
            height={20}
            cx={10}
            cy={10}
            cr={2}
            className={cn("absolute inset-0 opacity-50 pointer-events-none")}
          />

          <div className="relative z-10 text-center mb-4">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-semibold tracking-tighter text-lime-900 dark:text-white">
              What We Do?
            </p>
          </div>
          <div className="relative z-10">
            <HeroVideoDialog
              className="dark:hidden block w-full h-64 sm:h-80 md:h-full"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/eRFu6ofjpSs"
              thumbnailSrc="/images/thumbnail.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
        <ImageGallery />
        <div className="w-full max-w-4xl mx-auto mt-12">
          <CoreValues />
        </div>
        <div className="w-full max-w-4xl mx-auto mt-12">
          <Team />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
