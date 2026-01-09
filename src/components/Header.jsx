import { Circle, Cpu, MemoryStick, Network, Wifi, Zap } from "lucide-react";
import React from "react";

const Header = ({ scrollProgress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Circle className="w-3 h-3 fill-red-500 text-red-500" />
            <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <Circle className="w-3 h-3 fill-green-500 text-green-500" />
          </div>
          <span className="font-mono text-sm text-cyan-500">Anish Karki</span>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span className="text-gray-400">CPU: 26%</span>
          </div>
          <div className="flex items-center gap-2">
            <MemoryStick className="w-3 h-3 text-yellow-400" />
            <span className="text-gray-400">MEM: 9.1GB</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-3 h-3 text-green-400 " />
            <span className="text-gray-400">WIFI: 2.30MB/s</span>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-zinc-800">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Header;
