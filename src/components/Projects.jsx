import { applications } from "@/lib/applications";
import { Code, ExternalLink } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 font-mono">
          <Code className="w-5 h-5 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">
            Running Applications
          </h2>
          <span className="text-sm text-gray-500">
            {applications.length} active
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, i) => (
            <Card
              key={i}
              className={
                "bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-cyan-500/50 cursor-pointer  transition-all duration-300 group overflow-hidden"
              }
              style={{
                animation: `slideIn 0.5s ease-out ${i * 0.15}s both`,
              }}
            >
              <div className="bg-zinc-800/50 px-4 py-2 border-b border-zinc-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="font-mono text-xs text-gray-400">
                    {app.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {app.type}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>
                <div className="flex  flex-wrap gap-2 mb-4">
                  {app.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs font-mono border border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400">{app.status}</span>
                  </div>
                  <div className="text-gray-500">uptime: {app.uptime}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
