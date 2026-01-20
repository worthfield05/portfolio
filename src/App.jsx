import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const bootSequence = [
  "[SYSTEM] Initializing DevOS v2.0.26...",
  "[KERNEL] Loading MERN stack modules...",
  "[DRIVER] MongoDB driver loaded",
  "[DRIVER] Express.js middleware initialized",
  "[DRIVER] React renderer active",
  "[DRIVER] Node.js runtime ready",
  "[NETWORK] Portfolio services online",
  "[AUTH] Developer authenticated: MERN_DEV",
  "[SYSTEM] Boot complete. Welcome to DevOS.",
];
const App = () => {
  const [bootComplete, setBootComplete] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bootText, setBootText] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setBootText((prev) => {
        if (index >= bootSequence.length) {
          clearInterval(interval);
          setTimeout(() => setBootComplete(true), 500);
          return prev;
        }

        const next = [...prev, bootSequence[index]];
        index++;
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!bootComplete) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center font-mono">
        <div className="w-full max-w-3xl px-6">
          {bootText.map((line, i) => (
            <div
              key={i}
              className="text-green-400 text-sm mb-2 opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {line}
            </div>
          ))}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">Loading workspace...</span>
          </div>
        </div>
      </div>
    );
  }
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
