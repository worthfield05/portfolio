import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="bg-black overflow-x-hidden font-sans text-gray-100 min-h-screen">
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 rounded-full border border-cyan-500/50 transition-all duration-100"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
        }}
      />
      <Header />

      <div className="pt-16">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
