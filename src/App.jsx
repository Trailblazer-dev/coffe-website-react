import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponsor from "./components/Sponsor";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Purchase from "./components/Purchase";

function App() {
  return (
    <div className="bg-[#2F1F14] ">      
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Purchase/>
      <Sponsor/>
      <Contact/>
    </div>
  )
}

export default App