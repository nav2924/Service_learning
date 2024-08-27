import { Button } from "./ui/button";
import TypingAnimation from "./magicui/typing-animation";
import BoxReveal from "./magicui/box-reveal";

const Hero = () => {
  return (
    <div class="bg-white">
      <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p class="text-xl font-semibold  text-blue-500 ">
                  Bangalore is the fastest growing city in India with its
                  ever-increasing urban population.
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                  The Evergrowing Need.
                </h1>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Grow your career fast with right mentor.
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <a
                  href="#"
                  title=""
                  class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Get Started
                  <svg
                    class="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </BoxReveal>
            </div>
            <div>
              <img class="w-full rounded-lg" src="/hero.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
