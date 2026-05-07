import React, { useState } from "react";
import Reveal from "./Reveal";
import { skills } from "../data/mock";
import { Bug, Shield, Code2, ChevronRight } from "lucide-react";

const tabs = [
  { id: "qa", label: "QA Automation", icon: Bug },
  { id: "security", label: "Cybersecurity", icon: Shield },
  { id: "languages", label: "Lenguajes", icon: Code2 }
];

export default function Skills() {
  const [active, setActive] = useState("qa");
  const list = skills[active];

  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10 bg-[#070A14]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-cyan-400" />
            02 — Habilidades
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <Reveal delay={80}>
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Stack técnico <br />
              <span className="text-slate-400">& herramientas</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm border transition-all ${
                      isActive
                        ? "bg-cyan-400 text-slate-950 border-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.18)]"
                        : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_16px_rgba(34,211,238,0.06)]"
                    }`}
                  >
                    <t.icon className="w-4 h-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Terminal path indicator */}
        <Reveal delay={140}>
          <div className="font-mono text-xs text-slate-500 mb-6 flex items-center gap-1.5">
            <span className="text-cyan-400/60">~</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400/60">skills</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-300">{active}</span>
            <span className="text-slate-600 ml-1">$</span>
            <span className="text-slate-500">ls --catalog</span>
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400/60 animate-pulse ml-0.5" />
          </div>
        </Reveal>

        {/* Skills grid */}
        <div key={active} className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
          {list.map((s, i) => (
            <Reveal key={s} delay={180 + i * 60}>
              <div className="group relative px-5 py-3.5 rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-500/[0.03] hover:from-cyan-400/[0.12] hover:to-blue-500/[0.06] hover:border-cyan-400/60 transition-all duration-500 cursor-default overflow-hidden">
                {/* Left accent bar */}
                <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow */}
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-cyan-400/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="font-mono text-base text-slate-200 group-hover:text-cyan-200 transition-colors duration-500 relative z-10">
                  <span className="text-cyan-400/50 group-hover:text-cyan-400/80 transition-colors duration-500">$ </span>
                  {s}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Counter */}
        <Reveal delay={400}>
          <div className="mt-8 font-mono text-xs text-slate-600 flex items-center gap-2">
            <span className="w-6 h-px bg-white/5" />
            <span>{list.length} herramientas en este stack</span>
            <span className="flex-1 h-px bg-white/5" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
