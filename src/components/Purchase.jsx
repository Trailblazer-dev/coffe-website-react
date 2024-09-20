import { purchase, purchaseCards } from "../constants";

const Purchase = () => {
  return <section className="relative" id="purchase">
    <div className="absolute bg-purchasebg bg-cover bg-no-repeat blur-sm before:absolute before:inset-0 before:bg-purchasebg before:bg-cover  before:blur-sm before:z-0 w-full h-full"></div>
    <h2 className="font-bold text-3xl text-center text-white z-10 relative pt-10 lg:text-4xl lg:mb-2">
      {purchase.title}
    </h2>
    <p className="z-10 relative text-primaryColor text-center pb-10">
      {purchase.subtitle}
    </p>
    <div className="z-10 grid relative gap-4 justify-items-center place-items-center py-10 sm:grid-cols-2 md:grid-cols-3">
      {purchaseCards.map((card,index)=>(
        <div className="bg-aboutbg w-60 h-48 px-8 lg:w-72 lg:h-44 py-4 flex flex-col justify-center items-center rounded-md shadow-stone-800 shadow-xl hover:scale-105" key={index}>
          <div className="text-center mb-2">
            <h2 className="font-bold mb-2 lg:text-xl">
              {card.title}
            </h2>
            <p className="text-[#6F4436]">
              {card.price}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-xs text mb-2 lg:text-sm">
              {card.description}
            </p>
            <button className="bg-[#D9D9D9] px-4 py-1 rounded-md text-black/60 hover:bg-navbarbg hover:text-primaryColor">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
    
  </section>;
};

export default Purchase;
