import BoxReveal from "./magicui/box-reveal";

const Hero = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 mt-10 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-xl font-semibold  text-emerald-900 ">
                  Bangalore, India's fastest-growing city, is grappling with a
                  rise in drug addiction, particularly among its expanding urban
                  population.
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h1 className="mt-4 text-4xl font-bold text-lime-900 lg:mt-8 sm:text-6xl xl:text-8xl">
                  The Evergrowing Need.
                </h1>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Overcome addiction and reclaim your life with the right
                  support.
                </p>
              </BoxReveal>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-auto h-[664px] rounded-lg max-w-full sm:mx-auto"
                src="/images/hero.jpg"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
