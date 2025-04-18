//import { useState, useEffect, React } from 'react'
import { ReactFullpage, Slide } from "@fullpage/react-fullpage";
import Home from './components/Home'
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => (
  <div className="min-h-screen bg-gradient-to-r from-pink-50 to-blue-50">
    <Navbar />
    <ScrollIndicator/>
    <main>
      <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="h-screen snap-start flex items-center justify-center" id="home">
          <Home />
        </section>
        <section className="h-screen snap-start bg-white flex items-center justify-center text-gray-800 text-5xl font-bold">
          Projects
        </section>
        <section className="h-screen snap-start bg-yellow-400 flex items-center justify-center text-black text-5xl font-bold">
          About Me
        </section>
        <section className="h-screen snap-start bg-black flex items-center justify-center text-white text-5xl font-bold">
          Contact
        </section>
      </div>     
    </main>
  </div>  
);

export default App;
