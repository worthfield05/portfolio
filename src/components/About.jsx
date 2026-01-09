import { GitBranch } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

const About = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 font-mono">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">System Profile</h2>
        </div>
        <Card className={"bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8"}>
          <div className="space-y-6 font-mono text-sm">
            <div>
              <span className="text-cyan-400">// Origin Story</span>
              <p className="text-gray-300 mt-2 leading-relaxed"></p>
            </div>
            <div className="pt-4 border-t border-zinc-800">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">
                    1.5 yrs
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Active Learning Cycle
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Internal Builds
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">0</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Live Deployments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
