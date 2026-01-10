import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { applications } from "@/lib/applications";

const Contact = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  function handleCommand() {
    const cmd = input.toLowerCase().trim();
    let response = "";
    if (cmd === "help") {
      response =
        "Available commands: help, about, skills, projects, contact, clear";
    } else if (cmd === "about") {
      response =
        "Full-stack developer specializing in MERN. Building scalable applications since 2024.";
    } else if (cmd === "skills") {
      response =
        "MongoDB, Express.js, React, Node.js, TypeScript, Docker, AWS, Redis, GraphQL";
    } else if (cmd === "projects") {
      response = `${applications.length} production applications running. See workspace for details.`;
    } else if (cmd === "contact") {
      response =
        "Email: karkianish05@gmail.com | GitHub: @karkianish05 | LinkedIn: /in/karkianish05";
    } else if (cmd === "clear") {
      setOutput([]);
      setInput("");

      return;
    } else if (cmd) {
      response = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    if (cmd) {
      setOutput([...output, { cmd: input, output: response }]);
      setInput("");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleCommand();
    }
  }
  return (
    <section id="terminal-section" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl  w-full mx-auto">
        <div className="flex items-center gap-3 mb-8 font-mono">
          <Terminal className="w-10 h-10 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">Terminal Access</h2>
        </div>
        <Card className={"bg-zinc-900 border-zinc-800 overflow-hidden"}>
          <div className="bg-zinc-800 px-4 py-2 border-b border-zinc-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-xs text-gray-400">
                terminal -- contact
              </span>
            </div>
          </div>
          <div className="p-6 font-mono text-sm h-96 overflow-y-auto">
            <div className="text-green-400  mb-4">
              Worthfield Terminal v2.0.26
              <br />
              Type 'help' for available commands.
            </div>

            {output.map((item, index) => (
              <div key={index} className="mb-3">
                <div className="text-cyan-400">${item.cmd}</div>
                <div className="text-gray-300 mt-1">{item.output}</div>
              </div>
            ))}

            <div className="flex items-center gap-2">
              <span className="text-cyan-400">$</span>
              <input
                type="text"
                value={input}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command..."
                className="bg-transparent flex-1 text-white outline-none"
                autoFocus
              />
              <div className="w-2 h-4 bg-cyan-400 animate-pulse" />
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <div className="text-gray-400 mb-4">Or react out directly:</div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    karkianish05@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    linkedin.com/in/karkianish05
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    github.com/karkianish05
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
