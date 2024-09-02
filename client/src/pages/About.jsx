import React from "react";
import { Navbar } from "../components/index";
import HeroVideoDialog from "../components/magicui/herovideodialog";
import DotPattern from "../components/magicui/dot-pattern";
import { cn } from "../lib/utils";

const About = () => {
  return (
    <div>
      <Navbar />(
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <Navbar />
        <div
          className={cn(
            "relative p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md"
          )}
        >
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://youtu.be/eRFu6ofjpSs"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <DotPattern
            className={cn(
              "absolute inset-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
