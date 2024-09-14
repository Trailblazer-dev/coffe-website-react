import { hero } from "../constants";

const Hero = () => {
  return (
    <>
      <div className=" top-[4rem] sm:top-[5rem] relative h-[50vh] md:h-[60vh] lg:h-[70vh]  pt-28 md:pt-32 lg:pt-44 bg-[#2F1F14] bg-herobg bg-no-repeat bg-cover sm:bg-center place-items-center ">
        <div className="text-white flex flex-col flex-wrap justify-center items-center mx-auto">
          {/* <img src={hero.image} alt="image" className="absolute h-full w-full w-max-full sm:hidden" /> */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-pomFam mb-2">{hero.title}</h2>
          <p className="text-sm sm:text-base font-galFam lg:text-xl">{hero.subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
