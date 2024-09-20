import {features, featuresCard} from "../constants";
const Features = () => {
  return <section className="bg-sponsorbg py-4 font-PopFam" id="features">
    <h2 className="font-bold text-3xl text-center text-primaryColor">{features.title}</h2>
    <p className="text-center text-primaryColor mb-8">
      {features.subtitle}
    </p>
    <div className="grid place-items-center justify-center gap-6 sm:grid-cols-2  lg:grid-cols-4 mb-8">
      {featuresCard.map((card,index)=>(
        <div className="bg-aboutbg w-11/12 h-full py-4 px-8 flex flex-col justify-center items-center rounded-lg shadow-stone-600 shadow-xl hover:scale-105" key={index}>
          <div className="w-52 h-32 sm:w-3/4 sm:h-2/4 md:w-64 md:h-40 lg:w-36 lg:h-32 flex justify-center items-center mb-2">
            <img src={`${card.image}`} alt="image" className="rounded-md" />
          </div>
          <div className="text-center text-xl">
            <h2 className="font-bold mb-1">
              {card.title}
            </h2>
            <p className="text-sm">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    
  </section>;
};

export default Features;
