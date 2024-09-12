import { hero } from "../constants";

const Hero = () => {
  return (
    <>
      <div className=" top-[3.5rem] sm:top-[5rem] relative h-[50vh] bg-[#2F1F14] bg-herobg bg-no-repeat bg-cover">
        <div className="w-full ">
          {/* <img src={hero.image} alt="image" /> */}
          <div className="text-white flex flex-col flex-wrap justify-center items-center">
            <h2 className="text-4xl">{hero.title}</h2>
            <p className="text-sm">{hero.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
