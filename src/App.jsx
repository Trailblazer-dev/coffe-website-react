import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <div className="bg-[#2F1F14] ">      
      <Navbar/>
      <Hero/>
      <About/>
      <Sponsor/>
    </div>
  )
}

export default App