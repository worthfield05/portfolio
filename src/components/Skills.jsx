import { Cpu } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { skills } from "@/lib/skills";

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto max-auto">
        <div className="flex items-center gap-3 mb-8 font-mono">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">Stack Proficiency</h2>
          <span className="text-sm text-gray-500">
            Production stack -- active
          </span>
        </div>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden">
          <div className="bg-zinc-800/50 px-6 py-3 border-b border-zinc-700">
            <div className="grid grid-cols-12 gap-4 font-mono text-xs text-gray-400  uppercase">
              <div className="col-span-4">Module</div>
              <div className="col-span-3">Load</div>
              <div className="col-span-3">Memory Footprint</div>
              <div className="col-span-2">State</div>
            </div>
          </div>
          <div className="divide-y divide-zinc-800">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="px-6 py-4 hover:bg-zinc-800/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-12 gap-4 items-center font-mono text-sm">
                  <div className="col-span-4  flex items-center gap-3">
                    <span className="text-white  group-hover:cursor-pointer group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center gap-3">
                    <span className="text-white group-hover:cursor-pointer group-hover:text-cyan-400 transition-colors">
                      {skill.load}%
                    </span>
                  </div>
                  <div className="col-span-3 group-hover:cursor-pointer text-gray-400">
                    {skill.memory} GB
                  </div>
                  <div className="col-span-2 flex items-center gap-3">
                    <span className="text-white group-hover:cursor-pointer group-hover:text-cyan-400 transition-colors">
                      {skill.state}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
