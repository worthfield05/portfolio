import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute  inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>
      <div className="w-full max-w-4xl  relative">
        <div className="font-mono text-sm text-cyan-400 mb-4">$ whoami</div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight ">
          <span className="text-cyan-400 animate-pulse bg-300%">
            Full Stack
          </span>
          <br />
          <span className="text-white">Developer</span>
        </h1>
        <div className="font-mono text-gray-400 space-y-2 mb-8">
          <p className="text-lg">
            {"> "}
            <span className="text-green-400">Building</span> scalable web
            applications
          </p>
          <p className="text-lg">
            {"> "}
            <span className="text-cyan-400">Architecting</span> robust backend
            systems
          </p>
          <p className="text-lg">
            {"> "}
            <span className="text-amber-400">Crafting</span> seamless user
            experiences
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
          >
            <Github className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
          >
            <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
          >
            <Mail className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
