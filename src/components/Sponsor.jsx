import { sponsor, sponsorCards } from "../constants"

const Sponsor = () => {
  return (
    <>
    <div className="bg-sponsorbg font-PopFam py-10">
      <div className="flex justify-center items-center">
        <h2 className="text-primaryColor font-bold text-center text-4xl sm:text-5xl ">
        {sponsor.title}        
      </h2>
      <img src={sponsor.img} alt="image" className="w-16 h-16" />
      </div>
      
      <p className="text-primaryColor  font-medium text-center text-xl mb-8">
        {sponsor.subtitle}
      </p>
      <div className="gap-8 sm:gap-10 flex flex-col justify-center items-center lg:flex-row lg:px-4 ">
        {
          sponsorCards.map((cards,index)=>(
            <div key={index} className="flex flex-col justify-center items-center gap-2 py-6 px-4 bg-aboutbg w-[80%] h-auto lg:h-52 rounded-lg shadow-stone-600 shadow-xl text-center">
              <p>{cards.body}</p>
              <p className="text-[#0A424F] font-semibold">{cards.footer}</p>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Sponsor