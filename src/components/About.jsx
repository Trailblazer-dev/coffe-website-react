import { about } from "../constants"


const About = () => {
  return (
    <>
    <div className="bg-aboutbg my-10 py-10 flex flex-col justify-center items-center rounded-md md:flex-row gap-4">
        <div className="flex items-center justify-center px-4 py-2 md:py-0 md:px-0">
            <img src={about.image} alt="image" />
        </div>
        <div className="font-PopFam flex flex-col justify-center items-center md:items-start">
            <h2 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-3">{about.title}</h2>
            <p className="mb-6 sm:text-lg sm:mb-7">
                {about.subtitle}
            </p>
            <p className="text-xs mb-4 text-center sm:text-sm sm:mb-6 md:text-left">
                {about.description1}
            </p>
            <p className="text-xs mb-6 text-center sm:text-sm sm:mb-8 md:text-left">
                {about.description2}
            </p>
            <button className="bg-[#2F1F14] text-primaryColor px-6 py-2 rounded-md hover:scale-110 shadow-stone-600 shadow-md">Read More</button>
        </div>
    </div>
    
    </>
  )
}

export default About