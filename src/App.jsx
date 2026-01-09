import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.log(mousePos);
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
      <Header scrollProgress={scrollProgress} />

      <div className="pt-16">
        <Hero />
        <Skills />
        <Projects />
        <About />
      </div>
      <Footer />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default App;
