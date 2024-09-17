import { Links } from "../constants"
import logo from "../assets/logo.png"
import { MailIcon, PhoneCallIcon } from "lucide-react"

const Contact = () => {
  return (
    <>
    <div className="grid grid-cols-1 text-primaryColor font-PopFam" id="contact">
        <div className="flex justify-center items-center flex-col px-2 mt-2 mb-4">
            <h2 className="text-center font-bold text-3xl">Contact Us</h2>
            <p className="text-center mb-4">Send us a message</p>
            <form action="" className="flex justify-center items-center flex-col gap-4">
                <label htmlFor="name">
                    <input type="text" name="name" id="name" placeholder="Full name" className="w-10/12 rounded placeholder:pl-2 outline-none text-black px-2 py-1" />
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder="Your email" className="w-10/12 rounded placeholder:pl-2 outline-none text-black px-2 py-1"/>
                </label>
                <textarea name="message" rows="5" cols="20" id="message" placeholder="Your Message" className="outline-none  -left-3 relative rounded px-2 py-1 text-black"></textarea>
                <button type="submit"className="bg-aboutbg px-6 py-2 text-black rounded-lg shadow-sponsorbg shadow-md hover:scale-110">Submit</button>
            </form>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
            <h2 className="text-center font-bold text-3xl ">Sitemap</h2>
            <p className="mb-2">All our pages</p>
            <ul className="space-y-2 ">
                {
                    Links.map((link,index)=>(
                        <li key={index} className="before:content-['-'] before:mr-2">
                            <a href={`#${link.href}`} className="hover:scale-110">
                                {link.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="">
            <div className="">
                <img src={logo} alt="logo" />
            </div>
            <a href="tel:+08 400 20000" target="_blank" rel="noopener noreferrer">
            <PhoneCallIcon/>(08) 400 20000</a>
            <a href="mailto:" target="_blank" rel="noopener noreferrer">
                <MailIcon/>
                coffeeborcelle@gmail.com</a>
        </div>
    </div>
    </>
  )
}

export default Contact