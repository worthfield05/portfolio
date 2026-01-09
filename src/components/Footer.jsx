import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t border-zinc-800 py-8 px-6">
      <div className="flex justify-between items-center font-mono text-xs text-gray-500 mx-auto max-w-6xl ">
        <div>© 2026 MERN Full Stack Developer.</div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Status: Online</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
